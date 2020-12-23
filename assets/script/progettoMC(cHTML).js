function cHTML
(LogIn, KeyWord, Page, Out, Intro, Prefix, ImgType, QDir, QImgName, NBDir, NBImgName, MDir, MImgName, SHDir, SHImgName, RDir, RImgName) {

    this.LogIn = LogIn;
    this.KeyWord = KeyWord;
    this.Page = Page;
    this.Out = Out;
    this.Intro = Intro;
    this.Prefix = Prefix;
    this.ImgType = ImgType;
    this.QDir = QDir;
    this.QImgName = QImgName;
    this.NBDir = NBDir;
    this.NBImgName = NBImgName;
    this.MDir = MDir;
    this.MImgName = MImgName;
    this.SHDir = SHDir;
    this.SHImgName = SHImgName;
    this.RDir = RDir;
    this.RImgName = RImgName;

    this.Para = undefined;
    this.Table = undefined;
    this.ImgVec = undefined; //non definisco un vettore vuoto staticamente in modo tale da poter riempire un vettore vuoto ogni onclick
    this.Width = undefined; //la definisco all'interno delle varie show function
    this.Height = undefined; //la definisco all'interno delle varie show function
    this.Cols = undefined;

    this.Dati = new cDati(this.NBImgName.length); //passo solo Nhak's Birthday perchè è il più lungo

    this.Introduction = function() {
        this.Intro.style.display = "block";
    }

    this.Identify = function() {
        if(this.Dati.hash(String(this.KeyWord.value)) === 891637673) {
            this.Page.style.display = "block";
            this.LogIn.style.display = "none";
        }
        else alert("The digited keyword is not correct, try again");
    }

    this.ShowIntro = function() {
        this.Dati.Introduction();
        if(!this.ClickIntro) { this.Introduction(); } //così impedisco al bottone della intro di essere cliccato più di una volta
    }

    this.Show1 = function() {
        var t, tr, td, r, c, i, img;

        this.Intro.innerHTML = null;

        this.Width = 250;
        this.Height = 307,5;
        this.Cols = 5;

        if(this.Table != undefined) { this.Out.innerHTML = ""; this.Table = null; }
        //appendChild aggiunge in coda, quindi per sostituire devo prima cancellare

        this.ImgVec = new Array();

        this.Out.appendChild(t = this.Table = document.createElement("TABLE"));
        t.align = "center"; t.valign = "middle"; t.border = 0;

        tr = t.insertRow(-1);
        td = tr.insertCell(-1);
        td.colSpan = this.Cols + 1; td.align = "center"; //colSpan mi dice quante colonne occupa la mia cella
        td.innerHTML = "<h1 class='tit1'>QUARANTINE</h1><h2 class='tit'><div>Click on the image, if you'd like to zoom<br>Click on the button at the right side to see the next table<div></h2>";

        for (r = 0, i = 0; r < Math.ceil(this.QImgName.length/this.Cols); ++r) {
            tr = t.insertRow(-1);

            for (c = 0; c < this.Cols; ++c, ++i) {
                td = tr.insertCell(-1);
                td.align = "center"; td.valign = "middle";
                if(i < this.QImgName.length) {
                    td.innerHTML = "";
                    td.appendChild(img = document.createElement("IMG"));
                    //img.class="immagini";
                    img.src = this.QDir + this.QImgName[i] + this.ImgType;
                    img.onclick = new Function(this.Prefix + "Zoom(" + i + ")");
                    img.width = this.Width;
                    img.height = this.Height;
                    this.ImgVec.push(img);
                    console.log(this.ImgVec); //il vettore si riempe al primo click --> non è quello il problema
                    console.log(td.innerHTML); //al primo click le immagini hanno width=0 e height=0 !PROBLEMA!
                }
                else td.innerHTML = "&nbsp;";
            }

            if(r == 0) {
                td = tr.insertCell(-1);
                td.rowSpan = Math.ceil(this.QImgName.length/this.Cols); td.valign = "middle"; //rowSpan mi dice quante righe occupa la mia cella
                td.innerHTML = "&nbsp; &nbsp; <a href='#head'><input class='button' type='button' value='&#8680;' onclick='f.HTML.Show2()'></a>";
                //creo una cella nella prima riga della table (immagini) e la faccio espandere lungo tutte le righe di quest'ultima
            }
        }
    }


    this.Show2 = function() {
        var t, tr, td, r, c, i, img;

        this.Intro.innerHTML = null;

        this.Width = 220,5;
        this.Height = 233;
        this.Cols = 5;

        if(this.Table != undefined) { this.Out.innerHTML = ""; this.Table = null; }
        //appendChild aggiunge in coda, quindi per sostituire devo prima cancellare

        this.ImgVec = new Array();

        this.Out.appendChild(t = this.Table = document.createElement("TABLE"));
        t.align = "center"; t.valign = "middle"; t.border = 0;

        tr = t.insertRow(-1);
        td = tr.insertCell(-1);
        td.colSpan = this.Cols + 2; td.align = "center"; //colSpan mi dice quante colonne occupa la mia cella
        td.innerHTML = "<h1 class='tit1'>NHAK'S BIRTHDAY</h1><h2 class='tit'><div>Click on the image, if you'd like to zoom<br>Click on the buttons at the right side or the left side to see the previous or the next table<div></h2>";

        for (r = 0, i = 0; r < Math.ceil(this.NBImgName.length/this.Cols); ++r) {
            tr = t.insertRow(-1);

            if(r == 0) {
                td = tr.insertCell(-1);
                td.rowSpan = Math.ceil(this.NBImgName.length/this.Cols); td.valign = "middle"; //rowSpan mi dice quante righe occupa la mia cella
                td.innerHTML = "<a href='#head'><input class='button' type='button' value='&#8678;' onclick='f.HTML.Show1()'></a> &nbsp; &nbsp;";
                //creo una cella nella prima riga della table (immagini) e la faccio espandere lungo tutte le righe di quest'ultima
            }

            for (c = 0; c < this.Cols; ++c, ++i) {
                td = tr.insertCell(-1);
                td.align = "center"; td.valign = "middle";
                if(i < this.NBImgName.length) {
                    td.innerHTML = "";
                    td.appendChild(img = document.createElement("IMG"));
                    //img.class="immagini";
                    img.src = this.NBDir + this.NBImgName[i] + this.ImgType;
                    img.onclick = new Function(this.Prefix + "Zoom(" + i + ")");
                    img.width = this.Width;
                    img.height = this.Height;
                    this.ImgVec.push(img);
                    console.log(this.ImgVec); //il vettore si riempe al primo click --> non è quello il problema
                    console.log(td.innerHTML); //al primo click le immagini hanno width=0 e height=0 !PROBLEMA!
                }
                else td.innerHTML = "&nbsp;";
            }

            if(r == 0) {
                td = tr.insertCell(-1);
                td.rowSpan = Math.ceil(this.NBImgName.length/this.Cols); td.valign = "middle"; //rowSpan mi dice quante righe occupa la mia cella
                td.innerHTML = "&nbsp; &nbsp; <a href='#head'><input class='button' type='button' value='&#8680;' onclick='f.HTML.Show3()'></a>";
                //creo una cella nella prima riga della table (immagini) e la faccio espandere lungo tutte le righe di quest'ultima
            }
        }
    }


    this.Show3 = function() {
        var t, tr, td, r, c, i, img;

        this.Intro.innerHTML = null;

        this.Width = 220,5;
        this.Height = 225;
        this.Cols = 5;

        if(this.Table != undefined) { this.Out.innerHTML = ""; this.Table = null; }
        //appendChild aggiunge in coda, quindi per sostituire devo prima cancellare

        this.ImgVec = new Array();

        this.Out.appendChild(t = this.Table = document.createElement("TABLE"));
        t.align = "center"; t.valign = "middle"; t.border = 0;

        tr = t.insertRow(-1);
        td = tr.insertCell(-1);
        td.colSpan = this.Cols + 2; td.align = "center"; //colSpan mi dice quante colonne occupa la mia cella
        td.innerHTML = "<h1 class='tit1'>MILANO</h1><h2 class='tit'><div>Click on the image, if you'd like to zoom<br>Click on the buttons at the right side or the left side to see the previous or the next table<div></h2>";

        for (r = 0, i = 0; r < Math.ceil(this.MImgName.length/this.Cols); ++r) {
            tr = t.insertRow(-1);

            if(r == 0) {
                td = tr.insertCell(-1);
                td.rowSpan = Math.ceil(this.MImgName.length/this.Cols); td.valign = "middle"; //rowSpan mi dice quante righe occupa la mia cella
                td.innerHTML = "<a href='#head'><input class='button' type='button' value='&#8678;' onclick='f.HTML.Show2()'></a> &nbsp; &nbsp;";
                //creo una cella nella prima riga della table (immagini) e la faccio espandere lungo tutte le righe di quest'ultima
            }

            for (c = 0; c < this.Cols; ++c, ++i) {
                td = tr.insertCell(-1);
                td.align = "center"; td.valign = "middle";
                if(i < this.MImgName.length) {
                    td.innerHTML = "";
                    td.appendChild(img = document.createElement("IMG"));
                    //img.class="immagini";
                    img.src = this.MDir + this.MImgName[i] + this.ImgType;
                    img.onclick = new Function(this.Prefix + "Zoom(" + i + ")");
                    img.width = this.Width;
                    img.height = this.Height;
                    this.ImgVec.push(img);
                    console.log(this.ImgVec); //il vettore si riempe al primo click --> non è quello il problema
                    console.log(td.innerHTML); //al primo click le immagini hanno width=0 e height=0 !PROBLEMA!
                }
                else td.innerHTML = "&nbsp;";
            }

            if(r == 0) {
                td = tr.insertCell(-1);
                td.rowSpan = Math.ceil(this.MImgName.length/this.Cols); td.valign = "middle"; //rowSpan mi dice quante righe occupa la mia cella
                td.innerHTML = "&nbsp; &nbsp; <a href='#head'><input class='button' type='button' value='&#8680;' onclick='f.HTML.Show4()'></a>";
                //creo una cella nella prima riga della table (immagini) e la faccio espandere lungo tutte le righe di quest'ultima
            }
        }
    }

    this.Show4 = function() {
        var t, tr, td, r, c, i, img;

        this.Intro.innerHTML = null;

        this.Width = 220,5;
        this.Height = 225;
        this.Cols = 5;

        if(this.Table != undefined) { this.Out.innerHTML = ""; this.Table = null; }
        //appendChild aggiunge in coda, quindi per sostituire devo prima cancellare

        this.ImgVec = new Array();

        this.Out.appendChild(t = this.Table = document.createElement("TABLE"));
        t.align = "center"; t.valign = "middle"; t.border = 0;

        tr = t.insertRow(-1);
        td = tr.insertCell(-1);
        td.colSpan = this.Cols + 2; td.align = "center"; //colSpan mi dice quante colonne occupa la mia cella
        td.innerHTML = "<h1 class='tit1'>SEA HOLIDAY</h1><h2 class='tit'><div>Click on the image, if you'd like to zoom<br>Click on the buttons at the right side or the left side to see the previous or the next table<div></h2>";

        for (r = 0, i = 0; r < Math.ceil(this.SHImgName.length/this.Cols); ++r) {
            tr = t.insertRow(-1);

            if(r == 0) {
                td = tr.insertCell(-1);
                td.rowSpan = Math.ceil(this.SHImgName.length/this.Cols); td.valign = "middle"; //rowSpan mi dice quante righe occupa la mia cella
                td.innerHTML = "<a href='#head'><input class='button' type='button' value='&#8678;' onclick='f.HTML.Show3()'></a> &nbsp; &nbsp;";
                //creo una cella nella prima riga della table (immagini) e la faccio espandere lungo tutte le righe di quest'ultima
            }

            for (c = 0; c < this.Cols; ++c, ++i) {
                td = tr.insertCell(-1);
                td.align = "center"; td.valign = "middle";
                if(i < this.SHImgName.length) {
                    td.innerHTML = "";
                    td.appendChild(img = document.createElement("IMG"));
                    //img.class="immagini";
                    img.src = this.SHDir + this.SHImgName[i] + this.ImgType;
                    img.onclick = new Function(this.Prefix + "Zoom(" + i + ")");
                    img.width = this.Width;
                    img.height = this.Height;
                    this.ImgVec.push(img);
                    console.log(this.ImgVec); //il vettore si riempe al primo click --> non è quello il problema
                    console.log(td.innerHTML); //al primo click le immagini hanno width=0 e height=0 !PROBLEMA!
                }
                else td.innerHTML = "&nbsp;";
            }

            if(r == 0) {
                td = tr.insertCell(-1);
                td.rowSpan = Math.ceil(this.SHImgName.length/this.Cols); td.valign = "middle"; //rowSpan mi dice quante righe occupa la mia cella
                td.innerHTML = "&nbsp; &nbsp; <a href='#head'><input class='button' type='button' value='&#8680;' onclick='f.HTML.Show5()'></a>";
                //creo una cella nella prima riga della table (immagini) e la faccio espandere lungo tutte le righe di quest'ultima
            }
        }
    }

    this.Show5 = function() {
        var t, tr, td, r, c, i, img;

        this.Intro.innerHTML = null;

        this.Width = 220,5;
        this.Height = 225;
        this.Cols = 4;

        if(this.Table != undefined) { this.Out.innerHTML = ""; this.Table = null; }
        //appendChild aggiunge in coda, quindi per sostituire devo prima cancellare

        this.ImgVec = new Array();

        this.Out.appendChild(t = this.Table = document.createElement("TABLE"));
        t.align = "center"; t.valign = "middle"; t.border = 0;

        tr = t.insertRow(-1);
        td = tr.insertCell(-1);
        td.colSpan = this.Cols + 1; td.align = "center"; //colSpan mi dice quante colonne occupa la mia cella
        td.innerHTML = "<h1 class='tit1'>RANDOM</h1><h2 class='tit'><div>Click on the image, if you'd like to zoom<br>Click on the button at the left side to see the previous table<div></h2>";

        for (r = 0, i = 0; r < Math.ceil(this.RImgName.length/this.Cols); ++r) {
            tr = t.insertRow(-1);

            if(r == 0) {
                td = tr.insertCell(-1);
                td.rowSpan = Math.ceil(this.RImgName.length/this.Cols); td.valign = "middle"; //rowSpan mi dice quante righe occupa la mia cella
                td.innerHTML = "<a href='#head'><input class='button' type='button' value='&#8678;' onclick='f.HTML.Show4()'></a> &nbsp; &nbsp;";
                //creo una cella nella prima riga della table (immagini) e la faccio espandere lungo tutte le righe di quest'ultima
            }

            for (c = 0; c < this.Cols; ++c, ++i) {
                td = tr.insertCell(-1);
                td.align = "center"; td.valign = "middle";
                if(i < this.RImgName.length) {
                    td.innerHTML = "";
                    td.appendChild(img = document.createElement("IMG"));
                    //img.class="immagini";
                    img.src = this.RDir + this.RImgName[i] + this.ImgType;
                    img.onclick = new Function(this.Prefix + "Zoom(" + i + ")");
                    img.width = this.Width;
                    img.height = this.Height;
                    this.ImgVec.push(img);
                    console.log(this.ImgVec); //il vettore si riempe al primo click --> non è quello il problema
                    console.log(td.innerHTML); //al primo click le immagini hanno width=0 e height=0 !PROBLEMA!
                }
                else td.innerHTML = "&nbsp;";
            }
        }
    }


    this.Zoom = function(i) {
        this.Dati.Zoom(i);
        this.VisualizzaZoom();
    }

    this.VisualizzaZoom = function() {
        if (this.Dati.First != this.Dati.Second) { //se primo elemento cliccato e secondo sono diversi
            if(!this.Dati.FirstClicked) { //se i due elementi sono diversi e sono sul primo cliccato
                this.ImgVec[this.Dati.First].width = this.Width*2;
                this.ImgVec[this.Dati.First].height = this.Height*2;
                this.ImgVec[this.Dati.Second].width = this.Width;
                this.ImgVec[this.Dati.Second].height = this.Height;
            }
            else { //se i due elementi sono diversi e sono sul primo cliccato
                this.ImgVec[this.Dati.First].width = this.Width;
                this.ImgVec[this.Dati.First].height = this.Height;
                this.ImgVec[this.Dati.Second].width = this.Width*2;
                this.ImgVec[this.Dati.Second].height = this.Height*2;
            }
        }
        else { //se primo elemento cliccato e secondo sono uguali
                if (!this.Dati.FirstClicked) { //se elementi sono = sul primo click raddoppio le dimensioni
                    this.ImgVec[this.Dati.First].width = this.Width*2;
                    this.ImgVec[this.Dati.First].height = this.Height*2;
                }
                else { //se sono = sul secondo click prima ho aumentato, adesso diminuisco le dimensioni
                    this.ImgVec[this.Dati.Second].width = this.Width;
                    this.ImgVec[this.Dati.Second].height = this.Height;
                }
        }
    }

}
