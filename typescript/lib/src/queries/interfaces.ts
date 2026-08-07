import * as p_ from 'pareto-core/interface/query_interface'

import type * as s_execute_sandboxed_query_executable from "../schemas/execute_sandboxed_query_executable/schema.js"

export type query_executable = p_.Query_Interface<
    s_execute_sandboxed_query_executable.Result,
    s_execute_sandboxed_query_executable.Error,
    s_execute_sandboxed_query_executable.Parameters
>