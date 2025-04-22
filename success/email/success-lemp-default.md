Use the following credentials to access the Nextcloud admin panel:

**Admin Panel:** [${globals.protocol}://${env.domain}/](${globals.protocol}://${env.domain}/)  
**Login:** admin  
**Password:** ${globals.nc_admin_pass}  

To access the database admin panel:

**phpMyAdmin Panel**: [https://${env.domain}:8443/](https://${env.domain}:8443/)  
**Username**: ${globals.db_user}  
**Password**: ${globals.db_pass}  

To add a custom domain name for your Nextcloud installation, follow the steps described in our [documentation](https://www.virtuozzo.com/application-platform-docs/custom-domains/).
