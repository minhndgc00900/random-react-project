import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const HomePage = (props) => {
    return (
        <div>
            HomePage
        </div>
    )
}

HomePage.propTypes = {
    props: PropTypes
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
