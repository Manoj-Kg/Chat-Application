import { observer } from 'mobx-react-lite';
import { Fragment } from 'react';
import { Header } from "semantic-ui-react";
import { useStore } from '../../../app/stores/store';
import ActivityListItem from './ActivityListItems';

export default observer(function ActivityList() {
    const { activityStore } = useStore();
    const { groupedActivities } = activityStore;

    return (
        <>
            {groupedActivities.map(([group, activities]) => (
                <Fragment key={group}>
                    <Header sub color='green'>
                        {group}
                    </Header>
                    {activities && activities.map(activity => (
                        <ActivityListItem key={activity.id} activity={activity} />
                    ))}
                </Fragment>
            ))}
        </>

    )
})