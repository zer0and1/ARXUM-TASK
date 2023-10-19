import { Component } from "@angular/core";

@Component({
  selector: "app-like-button",
  template: ` <button
    class="like-button"
    [class.liked]="liked"
    (click)="toggleLike()"
  >
    Like | <span class="likes-counter">{{ likes }}</span>
  </button>`,
  styleUrls: ["./like-button.component.css"],
})
export class LikeButtonComponent {
  likes: number = 100;
  liked: boolean = false;

  toggleLike() {
    if (this.liked) {
      this.likes--;
    } else {
      this.likes++;
    }
    this.liked = !this.liked;
  }
}
