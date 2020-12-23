function cDati(CountNB) {

    this.CountNB = CountNB; //questo per ora non serve e forse non servirà

    this.FirstClicked = true;
    this.First = undefined;
    this.Second = undefined;
    this.ClickIntro = true;

    this.Introduction = function() {
        this.ClickIntro = !this.ClickIntro;
    }

    this.Zoom = function(i) {
        if(this.FirstClicked) this.First = i;
        else this.Second = i;
        this.FirstClicked = !this.FirstClicked;
    }

    this.hash = function(password){
      var hash = 0;
      if (password.length == 0) return hash;
      for (i = 0; i < password.length; i++) {
        char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
      }
    return hash;
    }

}
