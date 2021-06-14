import React from "react"
import "../css/Home.css"
import Product from "./Product"

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.JPG"
					alt=""
				/>

				<div className="home__row">
					<Product
						title="The Lean Startup"
						price={29.99}
						image="https://m.media-amazon.com/images/P/B004J4XGN6.01._SCLZZZZZZZ_SX500_.jpg"
						rating={5}
					/>
					<Product
						title="The Whole Brain Child"
						price={10.76}
						image="https://m.media-amazon.com/images/P/0553386697.01._SCLZZZZZZZ_SX500_.jpg"
						rating={5}
					/>
				</div>

				<div className="home__row">
					<Product
						title="Jarrow Formulas Methyl B-12 5000 mcg"
						price={17.84}
						image="https://images-na.ssl-images-amazon.com/images/I/71QBZPmkC0L._AC_SL1500_.jpg"
						rating={5}
					/>
					<Product
						title="Paliston Locking Carabiner"
						price={32.99}
						image="https://images-na.ssl-images-amazon.com/images/I/61CxSSWyqPL._AC_SL1001_.jpg"
						rating={5}
					/>
					<Product
						title="All-new Echo Dot (4th Gen, 2020 release)"
						price={44.99}
						image="https://images-na.ssl-images-amazon.com/images/I/61HK5umZg0L._AC_SL1000_.jpg"
						rating={5}
					/>
				</div>

				<div className="home__row">
					<Product
						title="Canon TS9521C All-In-One Wireless Crafting Photo Printer"
						price={318.0}
						image="https://images-na.ssl-images-amazon.com/images/I/81fzXUUs6bL._AC_SL1500_.jpg"
						rating={5}
					/>
				</div>
			</div>
		</div>
	)
}

export default Home
