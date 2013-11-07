SBS = {}

SBS.ScreenManager = function() {
  this.screens = []
  
  this.push_screen = function(screen) {
    this.screens.push(screen)
  }

  this.pop_screen = function() {
    this.screens.pop()
  }

  this.handle_event(event) {
    this.screens[this.screens.length - 1].handle_event(event);
  }

  this.render(panel) {
    var bottom = this.screens.length - 1;
    for (var i = this.screens.length - 1; i >= 0; i--) {
      if (!this.screens[i].is_partial()) {
        break;
      }
      bottom = i;
    }
    for (var i = bottom; i < this.screens.length; i++) {
      this.screen[i].render(panel);
    }
  }
}
