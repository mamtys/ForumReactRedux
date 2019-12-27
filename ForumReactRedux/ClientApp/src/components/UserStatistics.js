import React from 'react';
import { Statistic } from 'semantic-ui-react';

const UserStatistics = (props) => {
    const {totalQuestions = 22, totalAnswers = 31200, answersLiked = 22, answersAccepted = 3} = props || {};
    return (
        <Statistic.Group>
            <Statistic>
                <Statistic.Value>{totalQuestions}</Statistic.Value>
                <Statistic.Label>Questions</Statistic.Label>
            </Statistic>
            <Statistic>
                <Statistic.Value>{totalAnswers}</Statistic.Value>
                <Statistic.Label>Answers</Statistic.Label>
            </Statistic>
            <Statistic>
                <Statistic.Value>{answersLiked}</Statistic.Value>
                <Statistic.Label>Liked</Statistic.Label>
            </Statistic>
            <Statistic>
                <Statistic.Value>{answersAccepted}</Statistic.Value>
                <Statistic.Label>Accepted</Statistic.Label>
            </Statistic>
        </Statistic.Group>
    )
}

export default UserStatistics;
