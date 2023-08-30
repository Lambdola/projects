import sqlite3
from flask import g


def make_dicts(cursor):
    list_accumulator = []
    # iterate over the rows of data returned from querying the table; list of tuples(default) or Row object
    for item in cursor:
        list_accumulator.append(
            {k: item[k] for k in item.keys()}
        )
    return list_accumulator


def query_database(query, args=[]):
    connection = sqlite3.connect('trizent_autos.db')
    # Alters the default return value of a sqlite execute from list of tuples to list of Rows object
    connection.row_factory = sqlite3.Row
    db = connection.cursor()
    try:
        res = db.execute(query,args)
        res = make_dicts(res)
        connection.commit()
        db.close()
        return res
    except:
        db.close()
        return "Try/Catch: ERROR"

