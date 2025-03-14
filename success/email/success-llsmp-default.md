**Nextcloud environment**: [${globals.protocol}://${env.domain}/](${globals.protocol}://${env.domain}/)

Use the following credentials to access the server:   

**Login**: admin  
**Password**: ${globals.nc_admin_pass}  

Please use the following data to access LiteSpeed WebAdmin Console:

**Admin Console**: [https://${env.domain}:4848/](https://${env.domain}:4848/)   
**Login**: admin    
**Password**: ${globals.db_pass}  

Manage the database nodes using the next credentials:

**phpMyAdmin Panel**: [https://${env.domain}:8443/](https://${env.domain}:8443/)  
**Username**: ${globals.db_user}    
**Password**: ${globals.db_pass}  
