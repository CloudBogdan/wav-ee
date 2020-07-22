class Mouse {
    constructor() {

        this.x = 
        this.y = 0;
        
        onmousemove = e=> {

            this.x = e.clientX;
            this.y = e.clientY;

        }

    }
}