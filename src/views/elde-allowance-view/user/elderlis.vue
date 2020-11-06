<template>
	<AppLayout>
		<h1>Elder List</h1>
		<div>
			<b-colxx>
				<b-card class="mb-4" title="Sahans Table">
					<b-table responsive :items="itemss" :fields="fieldss" />
				</b-card>
			</b-colxx>
		</div>
	</AppLayout>
</template>




 


<script>
import AppLayout from "../../../layouts/AppLayout";
import axios from "axios";

export default {
	components: {
		AppLayout: AppLayout
	},
	data() {
		return {
			fieldss: [
				{
					key: "user_id",
					sortable: true
				},
				{
					key: "user_name",
					sortable: true
				},
				{
					key: "email",
					sortable: true
				},
				{
					key: "password",
					sortable: true
				},
				"add"
			],
			itemss: [{
					isActive: true,
					user_id: 2,
					id: "",
					user_name: "ddd",
					password:
						"$2b$10$I1yXO5QJ4NFCakYc43ktXOto7DLyXgCBvZyuXyerYTd4yo35wtXLC",
					email: "sss@dd.com",
					table_id: 0,
					role_id: 1,
					is_deleted: 1
				},
				{
					isActive: true,
					user_id: 7,
					id: "1",
					user_name: "aaaaaaaj",
					password:
						"$2b$10$QlgSRhs1fON4iGmkypiNRu0bkS2beA7qNL6E.Z2iZVTtqLouwde16",
					email: "sss@dd.com",
					table_id: 0,
					role_id: 1,
					is_deleted: 0
				},
				{
					isActive: true,
					user_id: 8,
					id: null,
					user_name: "aaad",
					password:
						"$2b$10$jtfIYtbiq5o1AOCgl4hEgeLi1MbtnIxqkx2iYpG83NxR97EwG611C",
					email: "sss@dd.com",
					table_id: 0,
					role_id: 1,
					is_deleted: 1
				},
				{
					isActive: true,
					user_id: 9,
					id: null,
					user_name: "aaadr",
					password:
						"$2b$10$CBcJhXMzwUHrCaT974NNE.LXXlcktY0NzQ9c.OyygN7Tynpyjk2dq",
					email: "sss@dd.com",
					table_id: 0,
					role_id: 1,
					is_deleted: 1
				},
				{
					isActive: true,
					user_id: 10,
					id: null,
					user_name: "ramesh",
					password:
						"$2b$10$2dqXJ6FC.J14f99H9mDJi.DU8tikI/kU.AqqgSwssyjdgJEu.3J.W",
					email: "ddd@dd.com",
					table_id: 0,
					role_id: 1,
					is_deleted: 1
				},
				{
					isActive: true,
					user_id: 12,
					id: null,
					user_name: "ramesht",
					password:
						"$2b$10$KZ6j/ordbODyPliTgYd0feV3AiMYiU31pS8o8SDYo1OeW.oXmAAfe",
					email: "ddd@dd.com",
					table_id: 0,
					role_id: 1,
					is_deleted: 0
				},
				{
					isActive: true,
					user_id: 13,
					id: null,
					user_name: "yuih",
					password:
						"$2b$10$S16eENHFpEEJTYsqIAPASukIOM3tDHVVGX6w.lM7/5n7mym7eFUrG",
					email: "sss@dd.com",
					table_id: 0,
					role_id: 1,
					is_deleted: 0
				},
				{
					isActive: true,
					user_id: 14,
					id: null,
					user_name: "sahan",
					password:
						"$2b$10$l0wd12Z.lVkJ98s0JGZNO.8O8xh0T8rlohsqj5LXzKkgPQfaXrQxy",
					email: "pppu@gmail.com",
					table_id: 0,
					role_id: 1,
					is_deleted: 0
				},
				{
					isActive: true,
					user_id: 15,
					id: null,
					user_name: "sada",
					password:
						"$2b$10$.PCrFiXUfuaW3rCo4F0TdeNSJ2MZdzWviV1LSChgxpcUl4G6D/hdO",
					email: "sadu@gmail.com",
					table_id: 0,
					role_id: 1,
					is_deleted: 0
				}]
		};
	},
	 
};
</script>
