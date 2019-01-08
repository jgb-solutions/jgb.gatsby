import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import  jgb from '../images/jgb-cartoon.png';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import orange from '@material-ui/core/colors/orange';

const title = "Web & Mobile Development Services";
const IndexPage = () => (
  	<Layout title={title} bgColor={orange[500]}>
    	<SEO title={title} keywords={['gatsby', 'application', 'react']} />

		<Grid container>
			<Grid item sm={12}>
				<h1 style={{textAlign: 'center'}}>{title}</h1>
			</Grid>
			<Grid item sm={6}>
				<img src={jgb}  style={{
					maxWidth: '100%',
					borderBottomRightRadius: '150px',
					borderBottomLeftRadius: '150px'
				}}/>
			</Grid>
			<Grid item sm={6}>
				<h2>Who I Am</h2>
				<Typography paragraph>
					<p>
						My name is Jean Gérard Bousiquot, a Software Developer from Delmas, Haiti.
						This website is the home for my business, <span>JGB Solutions</span>, where I offer Web, Mobile and other software development services.
					</p>
					<p>
						I've been developing for the web for a few years now.
						And about 2+ years worth of experience in mobile development.
					</p>
					<p>
						I'm proficient in PHP, JavaScript and TypeScript. PHP mainly for web applications, APIs and other kind of web services. Laravel is my go-to web framwork. JavaScript and TypeScript for web front-ends and hybrid mobile applications. Angular, Vue and React, Ionic, React Native are some of the tools I use. And Node is often used as a build tool locally, even though I'm learning it thoroughly in order to use it as a web application framework.
					</p>

					<p>
						I've been into computers for about 13 years now. So before development I've been dabbling with various computer related stuff such as graphic design, computer repair and more.
					</p>
					<p>
					Beside computers I like surfing the internet, playing NES video
						games, watching movies, TV shows and listening to music.
					</p>
					<p>
						I also love to read books and articles, but mainly techninal ones;
						speak and write in 4 languages: Creole, French, English and
						a little bit of Spanish.
					</p>
				</Typography>
			</Grid>
		</Grid>
  	</Layout>
)

export default IndexPage
