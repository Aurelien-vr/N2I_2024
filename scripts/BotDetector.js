// used to detect suspicious activities like a very uniform use of a mouse

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

class MouseSnapshot
{
    static mouse;
    static click;
    static MouseListener(mouse)
    {
        MouseSnapshot.mouse = {
            mouseX: mouse.pageX,
            mouseY: mouse.pageY,
            time: Date.now()
        };
        MouseSnapshot.click = {
            value: false,
            time: Date.now()
        }
    } 

    static MouseClickListener(mouse)
    {
        MouseSnapshot.mouse = {
            mouseX: mouse.clientX,
            mouseY: mouse.clientY,
            time: Date.now()
        }
        MouseSnapshot.click = {
            value:true, 
            time: Date.now()
        };
    }
    
    PosEquals(otherSnapShot)
    {
        return this.mouseX == otherSnapShot.mouseX && this.mouseY == otherSnapShot.mouseY;
    }

    constructor()
    {
        let _mouse = MouseSnapshot.mouse;
        let _click = MouseSnapshot.click;
        if(_mouse != undefined)
        {
            this.mouseX = _mouse.mouseX;
            this.mouseY = _mouse.mouseY;
            this.time = _mouse.time;
        }
        if(_click != undefined)
        {
            this.click = _click.value;
        }
        return this;
    }
}

class BotDetector
{
    // array of states
    static snapshots;
    // Instantiates the botdetector.
    constructor()
    {
        BotDetector.snapshots = [];
        window.addEventListener("mousemove" , mouse=>MouseSnapshot.MouseListener(mouse));
        window.addEventListener("click" , mouse=>MouseSnapshot.MouseClickListener(mouse));
        setInterval(() => {
            BotDetector.Snapshot(BotDetector.snapshots);
        }, 300);
        setInterval(() => {
            console.log("!!: Is bot: " +BotDetector.IsBot());
        }, 1000);
    }
    // Takes an instant snapshot of the mouse's state
    static Snapshot(snapshots)
    {
        if(snapshots == null)
        {
            snapshots = [];
            BotDetector.snapshots = snapshots;
        }
        let _ms = new MouseSnapshot();
        let _previous = snapshots[snapshots.length - 1];
        if(_ms.mouseX != undefined && _ms.mouseY != undefined && _ms.time != undefined &&
            ((_previous != undefined && _previous.time != _ms.time) || (_previous == undefined))
        )
        {
            snapshots.push(_ms);
        } 
    }

    // This computes how much different positions seems linear using mouse positions snapshots
    static GetLinearityDegree(snapshots)
    {
        let variation = .0;
        let linearity = .0;
        if(snapshots.length < 3)
        {
            // not enough snapshots to sample data
            return undefined;
        }
        for(let i = 1; i < snapshots.length - 1; ++i)
        {
            let p1 = snapshots[i - 1],
                p2 = snapshots[i],
                p3 = snapshots[i + 1];
            let _speed = Math.abs(this.CalculateSpeed(p1, p2) - this.CalculateSpeed(p2, p3));
            if(_speed != NaN)
                variation += _speed * 100;
            if(
                p1.click &&
                p2.click &&
                p3.click )
            {
                let _time1 = (p2.time - p1.time) ;
                let _time2 = (p3.time - p2.time) ;
                variation += Math.abs(_time2 - _time1) / 100 - 20;
            }
            // Angles near 0 and 180 are more sus, so cos is perfect for that
            let _angles = Math.abs(Math.cos(this.CalculateAngle(p1, p2, p3)));
            if((p1.PosEquals(p2) || p2.PosEquals(p3)) && `${_angles}` != "NaN")
                linearity += _angles *10E0;
        }
        linearity += 1;
        linearity /= snapshots.length;
        // variation is a counter-measure, the more variation there is the less likely a bot will be
        // flagged as is
        linearity -= variation / snapshots.length;
        BotDetector.snapshots = [];
        return linearity;
    }

    static CalculateSpeed(point1, point2) 
    {
        const distance = Math.sqrt(
            Math.pow(point2.mouseX - point1.mouseX, 2) + Math.pow(point2.mouseY - point1.mouseY, 2)
        );
        const time = (point2.time - point1.time); 
        return distance / time;
    }
      

    static CalculateAngle(p1, p2, p3) 
    {
        const v1 = { x: p2.mouseX - p1.mouseX, y: p2.mouseY - p1.mouseY };
        const v2 = { x: p3.mouseX - p2.mouseX, y: p3.mouseY - p2.mouseY };
        const dotProduct = v1.x * v2.x + v1.y * v2.y;
        const magnitude1 = Math.sqrt(v1.x ** 2 + v1.y ** 2);
        const magnitude2 = Math.sqrt(v2.x ** 2 + v2.y ** 2);
        return Math.acos(dotProduct / (magnitude1 * magnitude2)) * (180 / Math.PI);
      }

      static IsBot()
      {
        return BotDetector.GetLinearityDegree(BotDetector.snapshots) > 0.0;
      }
      
}

export { MouseSnapshot, BotDetector };