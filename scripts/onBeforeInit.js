import com.hivext.api.Response;
import org.yaml.snakeyaml.Yaml;
import com.hivext.api.core.utils.Transport;

var lsAppid = "9e6afcf310004ac84060f90ff41a5aba";
var isLS = jelastic.dev.apps.GetApp(lsAppid);

var settings = jps.settings;
var fields = {};
for (var i = 0, field; field = jps.settings.fields[i]; i++)
  fields[field.name] = field;
 
if (isLS.result == 0 || isLS.result == Response.PERMISSION_DENIED) {  
  fields["ls-addon"].hidden = false;
  fields["ls-addon"].value = true;
} else {
  fields["ls-addon"].hidden = true;
  fields["ls-addon"].value = false;
  fields["ls-addon"].showIf = null;
}

return {
    result: 0,
    settings: settings
};