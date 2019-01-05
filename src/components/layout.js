import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import orange from '@material-ui/core/colors/orange';
import grey from '@material-ui/core/colors/grey';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import WorkIcon from '@material-ui/icons/Work';

import logo from '../images/logo-jgb-solutions.png'

const drawerWidth = 240;

const styles = theme => ({
  	root: {
		display: 'flex',
		// maxWidth: '1000px',
		// marginLeft: 'auto',
		// marginRight: 'auto'
  	},
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
		flexShrink: 0,
		backgroundColor: '#000'
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
	 }
  },
  bottomAppBar: {
	  display: ''
 },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
	 width: drawerWidth,
  },
  	content: {
    	flexGrow: 1,
		padding: theme.spacing.unit * 3,
		height: '100%'

  },
  copyright: {
	textAlign: 'center',
	fontSize: '.8em',
  }
});

class Layout extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		mobileOpen: false,
		};
	}

	handleDrawerToggle = () => {
		this.setState(state => ({ mobileOpen: !state.mobileOpen }));
	};


	render = () => {
		const { classes, theme, bgColor } = this.props;
		const menu = [
			{
				name: 'About',
				url: '/',
				icon: <HomeIcon />
			},
			{
				name: 'Services',
				url: '/services',
				icon: <BuildIcon />
			},
			{
				name: 'Work',
				url: '/work',
				icon: <WorkIcon />
			},
			{
				name: 'Contact',
				url: '/contact',
				icon: <MailIcon />
			}
		];
		const drawer = (
			<div style={{
				backgroundColor: grey[900],
				height: '100%',
				color: grey[50]
				}}>
				{/* <div className={classes.toolbar} /> */}
				<img src={logo} alt="" style={{maxWidth: '100%'}} />
				<Divider />
				<List>
					{menu.map((menuItem, index) => (
						<ListItem button key={index} component={Link} to={menuItem.url}>
							<ListItemIcon>{menuItem.icon}</ListItemIcon>
							<ListItemText primary={menuItem.name}/>
						</ListItem>
					))}
				</List>
				{<Divider />}
				<p className={classes.copyright}>&copy; {(new Date()).getFullYear()} / All Rights Reserved</p>
				{/* <List>
					{['All mail', 'Trash', 'Spam'].map((text, index) => (
						<ListItem button key={text}>
								<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
								<ListItemText primary={text} />
						</ListItem>
					))}
				</List> */}
			</div>
		);

		return (
			<StaticQuery
				query={graphql`
				query SiteTitleQuery {
					site {
						siteMetadata {
						title
						}
					}
				}
				`}
				render={data => (
					<div className={classes.root}>
						<CssBaseline />
						<AppBar
							position="fixed"
							className={classes.appBar}
							style={{backgroundColor: orange[600],color: '#000'}}>
							<Toolbar>
								<IconButton
								color="inherit"
								aria-label="Open drawer"
								onClick={this.handleDrawerToggle}
								className={classes.menuButton}
								>
								<MenuIcon />
								</IconButton>
								<Typography variant="h6" color="inherit" noWrap>
								{this.props.title}
								</Typography>
							</Toolbar>
						</AppBar>
						<nav className={classes.drawer}>
							{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
							<Hidden smUp implementation="css">
								<Drawer
									container={this.props.container}
									variant="temporary"
									anchor={theme.direction === 'rtl' ? 'right' : 'left'}
									open={this.state.mobileOpen}
									onClose={this.handleDrawerToggle}
									classes={{
										paper: classes.drawerPaper,
									}}>
									{drawer}
								</Drawer>
							</Hidden>
							<Hidden xsDown implementation="css">
								<Drawer
									classes={{
										paper: classes.drawerPaper,
									}}
									variant="permanent"
									open>
									{drawer}
								</Drawer>
							</Hidden>
						</nav>
						<main className={classes.content} style={{backgroundColor: bgColor}}>
							<div className={classes.toolbar} />
							{/* <Typography paragraph>
								ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
							</Typography>
							<Typography paragraph>
								Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
								ultrices sagittis orci a.
							</Typography> */}
							{this.props.children}
						</main>
					</div>
				)}
			/>
		)
	}
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Layout);
