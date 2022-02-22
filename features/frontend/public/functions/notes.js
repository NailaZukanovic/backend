exports.handler = async function (event, context) {
    const { identity, user } = context.clientContext;
    // Do stuff and return a response...
    if(user)
    {
        return {
            statusCode:200,
            body: JSON.stringify(identity)
        }
    }

    return {
        statusCode: 401,
        body: JSON.stringify({msg:'You must log in to see this'})
    }
};