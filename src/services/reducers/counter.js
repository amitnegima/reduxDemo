const initialState=20;

function IncrementDecrement(state=initialState,action)
{
    if(action.type=="INC")
    {
        return state+1;
    }
    else if(action.type=="DEC" && action.val>=1)
    {
        return state-1;
    }
    else if(action.type=="CHANGE" )
    {
        return +action.val;
    }

    return state
}
export default IncrementDecrement;