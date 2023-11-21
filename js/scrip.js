let c=0;

    function carrusel(){
        let image = document.getElementById("portada-img");
            c++;
        if(c>4){
            c= 1;
        }
        image.setAttribute("src", "../img/portada"+c+".jpg");
        setTimeout(carrusel, 1500);
    }