//CONVERT----------------------------------------------------------------------------------------------------------------------------------------

function ctf (){console.log(document.getElementById('celcius'));
    let celc = document.getElementById('celcius').value;//mengambil nilai dari id dihtml
    let celcius = parseFloat(celc.trim());//memotong spasi kanan &kiri

    if (!isNaN(celcius)) { //apakah celcius sebuah angka numerik
        let fahrenheit = (celcius*1.8)+32; //jika iya, maka variabel fahrenheit akan terkalkulasi dengan rumus tersebut
        document.getElementById('fahrenheit').textContent=fahrenheit;} //textcontent dengan id fahrenheit diisi dengan variabel fahrenheit

        else{
            document.getElementById('fahrenheit').textContent="Masukkan angka yang valid!" //jika bukan (NaN), berbunyi "masukkan angka yg valid"
    }
    var fahrenheit = document.getElementById('fahrenheit').value; //mecentuskan bahwa variabel fahrenheit adalah value dari id fahrenheit di html
    var ftext = `(${celcius}°C x 9/5) + 32 = ${fahrenheit}°F`; //ftext adalah formula text yang nnti akan ditampilkan

    document.getElementById('formula').value = ftext; //esekusi/tampilkan
}

function ftc (){
    let fahr = document.getElementById('fahrenheit').value;
    let fahrenheitt = parseFloat(fahr.trim());

    if (!isNaN(fahrenheitt)) {
        let celciuss = 5/9*(fahrenheitt-32);
        document.getElementById('celcius').value=celciuss;

        let ftextt = `(${fahrenheitt}°F - 32) x 5/9 = ${celciuss}°C`;
        document.getElementById('formula').value = ftextt;}
        else{
            document.getElementById('celcius').textContent="Masukkan angka yang valid!"
            document.getElementById('formula').value='';
        }}
    
    //var celciuss= document.getElementById('celcius').value;
    //var ftextt = `${celciuss}°C x 9/5 + 32 = ${fahrenheit}°F`;
    
    //document.getElementById('formula').value = ftextt;

//REVERSE---------------------------------------------------------------------------------------------------------------------------------------

function swap(){
    var section1 = document.getElementById('section1'); //section1 dari id section1
    var section2 = document.getElementById('section2'); //section2 dari id section2 

    //console.log(document.getElementById('celcius'));

    let sec = section1.innerHTML; 
    section1.innerHTML=section2.innerHTML;section2.innerHTML=sec; 
        
    let button1 = document.getElementById('ctf');
    let button2 = document.getElementById('ftc');

    if (button1.style.display==='none'){ //jika button1 displaynya none
        button1.style.display='inline'; //maka button1 didisplay inline
        button2.style.display='none'; //dan button2 didisplay none
    }else{  //sebaliknya, jika button1 displaynya lain dari none
        button1.style.display='none'; //maka b1 didisplay none
        button2.style.display='inline'; //maka b2 didisplay inline
    }

    let res1 = document.getElementById('res');
    let res2 = document.getElementById('ress');

    if (res1.style.display==='none'){
        res1.style.display='inline';
        res2.style.display='none';
    }else{
        res1.style.display='none';
        res2.style.display='inline';
    }

    let textarea1 = document.getElementById('celcius');
    let textarea2 = document.getElementById('fahrenheit');

    if (textarea1.hasAttribute("readonly")){
        textarea1.removeAttribute('readonly');
        textarea2.setAttribute('readonly',true);
    }else{
        textarea1.setAttribute('readonly',true);
        textarea2.removeAttribute('readonly');
    }
    document.getElementById('formula').value='';    
    document.getElementById('fahrenheit').value='';
    document.getElementById('celcius').value='';
}
    
//RESET------------------------------------------------------------------------------------------------------------------------------------------

//document.addEventListener('DOMContentLoaded',function(){
  //  var rbutton = document.getElementById('res');
    //rbutton.addEventListener('click',function(){
      //  document.getElementById('celcius').value='';
        //document.getElementById('fahrenheit').value='';
    //})
//});

function resett(){

    document.getElementById('celcius').value='';
    document.getElementById('fahrenheit').textContent='';
    document.getElementById('formula').value='';
}

function resettt(){

    document.getElementById('celcius').value='';
    document.getElementById('fahrenheit').value='';
    document.getElementById('formula').value='';
}


//gmail: sanusivin1206@gmail.com