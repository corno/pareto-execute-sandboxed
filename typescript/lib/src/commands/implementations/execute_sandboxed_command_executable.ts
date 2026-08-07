import * as p_ from 'pareto-core/implementation/command'

import type * as command_interfaces from "../interfaces.js"
import type * as command_interfaces_resources from "pareto-resources/commands/interfaces"

export const $$: p_.Command_Implementation<
    command_interfaces.command_executable,
    {
        'program': string,
    },
    null,
    {
        'unrestricted': command_interfaces_resources.execute_unrestricted.command_executable,
    }
>
 = p_.command(
    ($d, $s, $q, $c) => [
        $c.unrestricted.execute(
            {
                'program': $s.program,
                'args': $d.args,
                'working directory': $d['working directory']
            },
            ($) => $
        )
    ]
)