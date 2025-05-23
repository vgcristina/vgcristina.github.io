export const profile = {
	fullName: 'Cristina Varela',
	title: '',
	institute: '',
	author_name: '', // Author name to be highlighted in the papers section
	research_areas: [
		{
			title: 'Backend',
			description: 'Java - Kotlin - Spring Boot básico',
		},
   
		{
		   title: 'Frontend',
		   description: 'JSF - HTML - CSS',
	   },
   
	   {
		   title: 'Bases de datos',
		   description: 'MySQL - Firebase (NoSQL)',
	   },
   
		{
		   title: 'Entornos de desarrollo y herramientas',
		   description: 'Eclipse - Android Studio - Hibernate - Maven - MySQL',
	   },
	   
	   {
		   title: 'Aprendiendo...',
		   description: 'Spring Boot - Python',
	   },
   
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'cristinavarelagomez@gmail.com',
	linkedin: 'https://www.linkedin.com/in/cristina-varela-gomez/',
	x: '',
	github: '',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://vgcristina.github.io', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'corporate', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Portfolio de Cristina Varela',
	default_description: 'Este es mi rincón personal donde voy actualizando todos mis logros como programadora',
	default_image: '/images/astro-academia.png',
}
