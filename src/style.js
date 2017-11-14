/* Object containing all the css for each component
 * Components: addListItem
 * 			   listItem 
 *			   
 * Exported as an object constant style
 * Accessed by Import {style} from 'path/relative/to/component';
 *
 */
export const style = {

	// addListItem styling
	div: {
		background: "#eee",
		padding: "20px",
		margin: "20px",
		position: 'absolute',
		bottom: '0'
	},
	input: {
		height: '45px',
		width: '350px',
		border: 'none',
		fontSize: '25px',
		margin: '0 auto',
		display: 'block'
	},
	button: {
		border: '3px solid #fff',
	    fontFamily: 'inherit',
	    fontSize: 'inherit',
	    cursor: 'pointer',
	    padding: '25px 80px',
	    display: 'inline-block',
	    margin: '15px 10px',
	    textTransform: 'uppercase',
	    letterSpacing: '1px',
	    fontWeight: '700',
	    outline: 'none',
	    position: 'relative',
	    WebkitTransition: 'all 0.3s',
	    MozTransition: 'all 0.3s',
	    transition: 'all 0.3s'
	},
	clear: {
		border: '3px solid #fff',
	    fontFamily: 'inherit',
	    fontSize: 'inherit',
	    cursor: 'pointer',
	    padding: '25px 20px',
	    display: 'inline-block',
	    margin: '15px 10px',
	    textTransform: 'uppercase',
	    letterSpacing: '1px',
	    fontWeight: '700',
	    outline: 'none',
	    position: 'relative'
	},

	// listItem styling
	icon: {
		width: '40px',
		height: '40px',
		cursor: 'pointer'
	},
	li: {
		fontSize: '20px',
		marginTop: '10px'
	},
	up: {
		color: 'green'
	}
}