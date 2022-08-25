CREATE DATABASE pern_todo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    username VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE login(
    login_id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255)
);


INSERT INTO store(designation,listshops) values("Tacoday",{})




INSERT INTO shops(designation,schedule,address,mdv,mdp,image) values("Tacoday Lac2",'{
    0:[
   ' {
        "start":"08:00",
        "finish":"12:00"
    }',
    '{
        "start":"14:00",
        "finish":"17:00"
    }',
    ],
    1:['{
        "start":"08:00",
        "finish":"12:00"
    }',
    '{
        "start":"14:00",
        "finish":"17:00"
    }',],
    2:['{
        "start":"08:00",
        "finish":"12:00"
    }',
    '{
        "start":"14:00",
        "finish":"17:00"
    }',]:
    3:['{
        "start":"08:00",
        "finish":"12:00"
    }',
    '{
        "start":"14:00",
        "finish":"17:00"
    }',],
    4:['{
        "start":"08:00",
        "finish":"12:00"
    }',
    '{
        "start":"14:00",
        "finish":"17:00"
    }',],
    5:['{
        "start":"08:00",
        "finish":"12:00"
    }',
    '{
        "start":"14:00",
        "finish":"17:00"
    }',],
    6:['{
        "start":"08:00",
        "finish":"12:00"
    }',
   ]
}',"Lac 2",
'{
    1:"Emporter",
    2:"Sur place",
    3:"Livraison"
}',


'{
    1:"Especes",
    2:"Carte bancaire"
    3:"Carte fidelité"
}');














schedule
{
    0:[
    {
        "start":"08:00",
        "finish":"12:00"
    },
    {
        "start":"14:00",
        "finish":"17:00"
    },
    ],
    1:[{
        "start":"08:00",
        "finish":"12:00"
    },
    {
        "start":"14:00",
        "finish":"17:00"
    },],
    2:[{
        "start":"08:00",
        "finish":"12:00"
    },
    {
        "start":"14:00",
        "finish":"17:00"
    },]:
    3:[{
        "start":"08:00",
        "finish":"12:00"
    },
    {
        "start":"14:00",
        "finish":"17:00"
    },],
    4:[{
        "start":"08:00",
        "finish":"12:00"
    },
    {
        "start":"14:00",
        "finish":"17:00"
    },],
    5:[{
        "start":"08:00",
        "finish":"12:00"
    },
    {
        "start":"14:00",
        "finish":"17:00"
    },],
    6:[{
        "start":"08:00",
        "finish":"12:00"
    },
   ]
}


mdv
{
    1:"Emporter",
    2:"Sur place",
    3:"Livraison"
}

mdp
{
    1:"Especes",
    2:"Carte bancaire"
    3:"Carte fidelité"
}







INSERT INTO shops(designation,schedule,address,mdv,mdp,image) values("Tacoday Lac2",{
    0:[
   {
        "start":"08:00",
        "finish":"12:00"
    },
    {
        "start":"14:00",
        "finish":"17:00"
    },
    ],
    1:[{
        "start":"08:00",
        "finish":"12:00"
    },
    {
        "start":"14:00",
        "finish":"17:00"
    },],
    2:[{
        "start":"08:00",
        "finish":"12:00"
    },
    {
        "start":"14:00",
        "finish":"17:00"
    },]:
    3:[{
        "start":"08:00",
        "finish":"12:00"
    },
    {
        "start":"14:00",
        "finish":"17:00"
    },],
    4:[{
        "start":"08:00",
        "finish":"12:00"
    },
    {
        "start":"14:00",
        "finish":"17:00"
    },],
    5:[{
        "start":"08:00",
        "finish":"12:00"
    },
    {
        "start":"14:00",
        "finish":"17:00"
    },],
    6:[{
        "start":"08:00",
        "finish":"12:00"
    },
   ]
},"Lac 2",
{
    1:"Emporter",
    2:"Sur place",
    3:"Livraison"
},


{
    1:"Especes",
    2:"Carte bancaire"
    3:"Carte fidelité"
});


UPDATE store set list_shops='{"Tacoday Lac2":"f71c9795-6d60-4c37-8d47-c95e7deeb5b1","Tacoday Nasr":" 23a33cab-10af-49a5-aef1-e5102e6cc1d2"}'  WHERE uid='0a0ddd59-1e91-4c76-87c1-b9164b0edee4';

INSERT INTO shops(uid,desingation,schedule,address,mdp,mdv,image) values (gen_random_uuid (),'Tacoday Nasr',
   '{
    "0":[
   {
        "start":"08:00",
        "finish":"12:00"
    },
    {
        "start":"14:00",
        "finish":"17:00"
    }
   ]
}',
'Nasr','
{
   
}'
,'{
   
}','');


update shops set mdp='{"cash":"true","card":"true"}'   where uid='23a33cab-10af-49a5-aef1-e5102e6cc1d2';