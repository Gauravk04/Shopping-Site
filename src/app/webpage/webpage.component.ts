import { Component } from '@angular/core';

import { faCartShopping, faClose, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.css']
})
export class WebpageComponent {
  icon = faCartShopping;
  close = faClose;
  star = faStar;
  hstar = faStarHalfStroke;

  fbook = faFacebook;
  t = faTwitter;
  y = faYoutube;
  i = faInstagram;
  p = faPinterest;
  L = faLinkedin;
}
