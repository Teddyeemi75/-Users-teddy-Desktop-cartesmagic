import React from "react";
import styles from '../styles/Home.module.css'


export default function collectioncarte() {
    return (




		<><div class="flip-container" ontouchstart="this.classList.toggle('hover');">
			<div class="flipper">
				<div class="card front">
					<div class="card-background">
						<article>
							<div class="card-body"></div>
							<header class="card-name">
								<div>
									<h1>Creature's Name</h1>
									<i class="ms ms-u ms-cost ms-shadow"></i>
									<i class="ms ms-1 ms-cost ms-shadow"></i>
								</div>
							</header>

							<div class="art">
								<img src="pages/Images/Brawler's%20Plate.jpg" alt="Brawler's%20Plate" width="100%" height="auto" />
							</div>

							<header class="card-type">
								<div>
									<h2>Card Type — Another Type <i class="ss ss-tor"></i></h2>
								</div>
							</header>
							<div class="textBox">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec tincidunt lectus.</p>
								<p>Sed malesuada pretium nibh ac lobortis. Sed sit amet nibh aliquam, dictum justo quis.</p>
								<blockquote>
									<p>“Quisque ullamcorper turpis id magna consectetur, sed molestie nunc pretium.”</p>
									<p>—Condimentum</p>
								</blockquote>
							</div>
							<header class="powerToughness">
								<div>
									<h2>1/1</h2>
								</div>
							</header>

							<footer>
								<p>100/100 C<br />
									ABC ‧ EN - Ronniemon</p>
								<h6>™ &amp; © 2016 Wizards of the Coast</h6>
							</footer>

						</article>

					</div>
				</div>
				<div class="card back">
					<img src="pages/Images/Back.jpg" alt="Back" width="100%" height="auto" />
				</div>
			</div>
		</div><div class="flip-container" ontouchstart="this.classList.toggle('hover');">
				<div class="flipper">
					<div class="card front">
						<div class="card-background">
							<article>
								<div class="card-body"></div>
								<header class="card-name">
									<div>
										<h1>Creature's Name</h1>
										<i class="ms ms-u ms-cost ms-shadow"></i>
										<i class="ms ms-1 ms-cost ms-shadow"></i>
									</div>
								</header>

								<div class="art">
									<img src="pages/Images/Brawler's%20Plate.jpg" alt="Brawler's%20Plate" width="100%" height="auto" />
								</div>

								<header class="card-type">
									<div>
										<h2>Card Type — Another Type <i class="ss ss-tor"></i></h2>
									</div>
								</header>
								<div class="textBox">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec tincidunt lectus.</p>
									<p>Sed malesuada pretium nibh ac lobortis. Sed sit amet nibh aliquam, dictum justo quis.</p>
									<blockquote>
										<p>“Quisque ullamcorper turpis id magna consectetur, sed molestie nunc pretium.”</p>
										<p>—Condimentum</p>
									</blockquote>
								</div>
								<header class="powerToughness">
									<div>
										<h2>1/1</h2>
									</div>
								</header>

								<footer>
									<p>100/100 C<br />
										ABC ‧ EN - Ronnie Montoya</p>
									<h6>™ &amp; © 2016 Wizards of the Coast</h6>
								</footer>

							</article>

						</div>
					</div>
					<div class="card back">
						<img src="pages/Images/Back.jpg" alt="Back" width="100%" height="auto" />
					</div>
				</div>
			</div></>


)
}