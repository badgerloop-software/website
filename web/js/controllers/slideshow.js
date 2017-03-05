 var images = ("../im/background/UW Logo.png","../im/background/Badger Loop White.png","../im/background/Past Behind.jpg");
        
        var imageNumber = 0;
        var imageLength = images.length -1;
        
        function changeImage(x) {
            
            if (imageNumber > imageLength) {
                imageNumber = 0;
            }
            if (imageNumber < 0) {
                imageNumber = imageLength;
            }
            
            document.getElementById("slideshow").src = images[imageNumber];
        
            return false;
        }
        function autoRun() {
            setInterval("changeImage(1)", 5000);
        }
    