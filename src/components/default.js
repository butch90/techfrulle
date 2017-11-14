constructor () {
		super();

		this.state = {
			iframe: false,
			iframeUrl: ''
		}

		this.handleClick.bind(this);
	}

	handleClick (util) {

		!this.state.iframe ? this.setState({iframe: !this.state.iframe}) : this.setState({iframe: this.state.iframe});

		switch (util) {
			case 'slack' :
				this.setState({iframeUrl: this.props.urls.slack});
				break;
			case 'harvest' :
				this.setState({iframeUrl: this.props.urls.harvest});
				break;
			case 'gmail' :
				this.setState({iframeUrl: this.props.urls.gmail});
				break;
			case 'linkedin' :
				this.setState({iframeUrl: this.props.urls.linkedin});
				break;
			default :
			break;
		}
	}

	closeIframe () {
		this.setState({
			iframe: !this.state.iframe
		});
		console.log(this.state.iframe, 'iframe');
	}

	render () {
		const style = {
			image: {
				width: '75%',
				height: '75%',
				margin: '20px',
				background: 'white'
			},
			table: {
				margin: '0',
			    padding: '0',
			    border: '0',
			    outline: '0',
			    fontSize: '100%',
			    verticalAlign: 'baseline',
			    background: 'white'
			},
			row: {
				background: 'transparent'
			}
		};

		const slack = <td><button onClick={() => {this.handleClick('slack')}}><img style={style.image} alt='img' src={this.props.buttonImages.slack}></img></button></td>,
			harvest = <td><button onClick={() => {this.handleClick('harvest')}}><img style={style.image} alt='img' src={this.props.buttonImages.harvest}></img></button></td>,
			gmail = <td><button onClick={() => {this.handleClick('gmail')}}><img style={style.image} alt='img' src={this.props.buttonImages.gmail}></img></button></td>,
			linkedin = <td><button onClick={() => {this.handleClick('linkedin')}}><img style={style.image} alt='img' src={this.props.buttonImages.linkedin}></img></button></td>;

		let context = this.state.iframe ? <div><Iframe target="blank" sandbox='allow-scripts allow-same-origin' url={this.state.iframeUrl} width='400px' height='400px' display="initial" position="relative" /><button onClick={this.closeIframe.bind(this)}>Button</button></div> : <table style={style.table}><tbody><tr style={style.row}>{slack}{harvest}</tr><tr style={style.row}>{gmail}{linkedin}</tr></tbody></table> 
		return (
			context
		);
	}
}