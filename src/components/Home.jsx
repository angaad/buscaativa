/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-23 20:02:26
 */

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Logo from '../images/logo-angaad-250.png'

const Home = props => (
    <Container>
		<Row>
			<Col style={{textAlign: 'center'}}>
				<img src={Logo} alt='Logo' />
			</Col>
		</Row>
		<Row>
			<Col>
        		<h1>Busca Ativa</h1>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Fusce quis ipsum at sem imperdiet volutpat. Proin dapibus
					blandit congue. Nulla commodo, ante ac ultrices volutpat,
					nulla nulla aliquam sapien, nec sollicitudin dui nulla id
					erat. Praesent lobortis, arcu in scelerisque sagittis,
					tortor quam sagittis magna, vel luctus augue nibh a orci.
					Aenean dignissim egestas orci, ut faucibus mi euismod non.
					Donec gravida urna ex. Quisque condimentum eget nisi vel
					imperdiet.
				</div>
				<br />
				<div>
					Donec mattis neque fringilla nunc sollicitudin sagittis.
					Morbi dapibus mi quis diam pulvinar consectetur. Sed rhoncus
					elit ipsum, at ultrices orci aliquet ac. Suspendisse
					potenti. Etiam in magna dolor. Nulla fermentum non ligula
					nec viverra. Suspendisse potenti. Integer ligula elit,
					rhoncus ac mauris sed, tincidunt vulputate nunc. Nulla
					cursus orci mauris, imperdiet volutpat dui suscipit id.
					Aenean euismod in urna quis mattis. Morbi laoreet commodo
					velit eget hendrerit. Quisque non luctus lectus, id cursus
					leo.
				</div>
				<br />
				<div>
					Etiam in diam congue, tincidunt sapien sit amet, auctor sem.
					Nulla pretium, arcu a mattis volutpat, massa justo porta
					risus, in mattis est est eget metus. Nunc ornare venenatis
					velit ut dictum. Morbi quis ultrices enim, sit amet
					elementum massa. Interdum et malesuada fames ac ante ipsum
					primis in faucibus. Etiam finibus interdum mauris, eget
					dictum dolor. Ut ut imperdiet magna, a ultrices nisi. Nam ut
					venenatis risus. Sed tristique turpis a commodo condimentum.
					Proin justo sem, dapibus ac viverra ullamcorper,
					pellentesque quis massa. Sed ac pretium nisl. Maecenas eu
					metus et ipsum malesuada eleifend. Phasellus maximus est
					dolor, id vulputate justo aliquet scelerisque. Fusce rutrum
					pharetra aliquam.
				</div>
				<br />
				<div>
					Pellentesque porta laoreet orci, non interdum mauris
					gravida sit amet. Ut at vulputate metus, ac pharetra lorem.
					Cras elementum, odio vitae fringilla pretium, enim mi
					ultricies nisi, non fermentum urna leo ac ligula. Vivamus
					vel dolor arcu. Etiam eget lectus eu sapien congue semper.
					Donec commodo lorem enim, sit amet dapibus dolor
					pellentesque ut. Suspendisse potenti. Pellentesque sit amet
					molestie nunc, id sagittis nunc. Cras ut nulla ut ex dapibus
					ultricies. Nulla in fringilla velit. Duis lacus nibh,
					gravida vel orci in, rhoncus tempus odio. Nunc feugiat ipsum
					eget sem vehicula convallis. Mauris sit amet arcu diam.
					Nullam dictum metus erat, vel cursus nisi blandit et.
				</div>
				<br />
				<div>
					Quisque non vulputate ante, vitae ornare quam. Vivamus ut
					ex id ligula egestas tempor. Phasellus sit amet mauris
					vestibulum eros volutpat eleifend non quis ante.
					Pellentesque varius felis sit amet imperdiet efficitur.
					Integer tempor, tortor non vehicula vestibulum, elit turpis
					porttitor eros, eget eleifend neque augue sit amet augue.
					Nunc tristique semper erat fringilla condimentum. Fusce
					hendrerit nisl id arcu tempus, a tempor urna accumsan.
					Suspendisse ultricies vestibulum faucibus. Sed eu tempor
					erat, nec ornare nulla.
				</div>
			</Col>
		</Row>
    </Container>
)

// Mark: - Redux
const actions = {
}

const mapStateToProps = state => ({
    isAuthenticated: state.appReducer.isAuthenticated
})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
