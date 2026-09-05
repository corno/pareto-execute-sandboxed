import * as p_ from 'pareto-core/command_interface'

import type * as s_execute_sandboxed_command_command from "../schemas/execute_sandboxed_command_executable/schema.js"
import type * as s_execute_sandboxed_smelly_command_command from "../schemas/execute_sandboxed_smelly_command_executable/schema.js"


export type command_executable = p_.Command_Interface<
    s_execute_sandboxed_command_command.Error,
    s_execute_sandboxed_command_command.Parameters
>
export type smelly_command_executable = p_.Command_Interface<
    s_execute_sandboxed_smelly_command_command.Error,
    s_execute_sandboxed_smelly_command_command.Parameters
>