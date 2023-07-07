import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityList from './ActivityList';

export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();
    const {loadActivities, activityRegistry} = activityStore;

    useEffect(() => {
        if (activityRegistry.size <= 1) loadActivities();
    }, [loadActivities])
  
    if (activityStore.loadingInitial) return <LoadingComponent content='Loading app...' />
    
    return (
        
        <Grid>
            <h2>Activities : </h2>
            <Grid.Column width='15'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='1'>
            </Grid.Column>
        </Grid>
    )
})