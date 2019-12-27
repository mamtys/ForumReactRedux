import React from 'react';
import {connect} from 'react-redux';
import QuestinList from '../components/QuestionList';

import actionCreators from '../redux/actions/questions';

class QuestionsPage extends React.Component{
    componentDidMount(){
        this.props.load();
    }
    render(){
        return <QuestinList {...this.props}/>
    }
}

const mapStateToProps = (state) =>{
    return {
       Ids: state.questions.allIds,
       status: state.questions.status.status
    }
}

const mapDispatchToProps = {
    load: actionCreators.load
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);