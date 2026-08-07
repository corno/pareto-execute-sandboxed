import * as p_ from 'pareto-core/implementation/query'

import type * as query_interfaces from "../interfaces.js"
import type * as query_interfaces_resources from "pareto-execute-unrestricted-api/queries/interfaces"

//dependencies


export const $$: p_.Query_Implementation<
    query_interfaces.query_executable,
    {
        'program': string,
    },
    {
        'unrestricted': query_interfaces_resources.query_executable,
    }
> = p_.query(
    ($d, $s, $q) => $q.unrestricted(
        {
            'program': $s.program,
            'args': $d.args,
            'working directory': $d['working directory']
        },
        ($) => $,
    )
)