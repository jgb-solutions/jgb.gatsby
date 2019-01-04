import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import logo from '../images/logo-jgb-solutions.png'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
	 }
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
  },
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
		const { classes, theme } = this.props;
		const menu = [
			{
				name: 'About',
				url: '/'
			},
			{
				name: 'Services',
				url: '/services'
			},
			{
				name: 'Work',
				url: '/work'
			},
			{
				name: 'Contact',
				url: '/contact'
			}
		];
		window.menu = menu
		const drawer = (
			<div>
				{/* <div className={classes.toolbar} /> */}
				<img src={logo} alt="" style={{maxWidth: '100%'}} />
				<Divider />
				<List>
					{menu.map((menuItem, index) => (
						<ListItem button key={index} component={Link} to={menuItem.url}>
							<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={menuItem.name} />
						</ListItem>
					))}
				</List>
				{/* <Divider />
				<List>
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
									style={{backgroundColor: orange[600],color: '#000'}}
									containerStyle={{backgroundColor: '#000000'}}
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
									style={{backgroundColor: orange[600],color: '#000'}}
									containerStyle={{backgroundColor: '#000000'}}
									classes={{
										paper: classes.drawerPaper,
									}}
									variant="permanent"
									open>
									{drawer}
								</Drawer>
							</Hidden>
						</nav>
						<main className={classes.content}>
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
