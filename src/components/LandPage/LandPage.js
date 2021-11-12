import React from 'react'
import BlobBack from '../Svgs/BlobBack'
import BlobFront from '../Svgs/BlobFront'
import ManInMask from '../Svgs/ManInMask'
import WomanInMask from '../Svgs/WomanInMask'

const LandPage = ({ theme, themeColorScheme }) => {
	let content = (
		<section className="landpage">
			<div>
				<h1 style={{ color: `${themeColorScheme.title}` }}>covid-19</h1>
				<p style={{ color: `${themeColorScheme.text}` }}>The coronavirus is spreading to fast and I want you to be aware of what is happening in the world.</p>
				<p style={{ color: `${themeColorScheme.text}` }}>
					See some common questions being answered{' '}
					<a style={{ color: `${themeColorScheme.text}` }} target="blank" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/coronavirus-disease-covid-19-masks">
						here
					</a>
					.
				</p>
			</div>
			<div className="landpage-image-container">
				<div className="svg-blob-back">
					<BlobBack themeColorScheme={themeColorScheme} />
				</div>
				<div className="svg-blob-front">
					<BlobFront themeColorScheme={themeColorScheme} />
				</div>
				<div className="svg-man">
					<ManInMask themeColorScheme={themeColorScheme} />
				</div>
				<div className="svg-woman">
					<WomanInMask themeColorScheme={themeColorScheme} />
				</div>
			</div>
		</section>
	)

	return content
}

export default LandPage
