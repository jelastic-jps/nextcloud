var resp = {
  result: 0,
  ssl: !!jelastic.billing.account.GetQuotas('environment.jelasticssl.enabled').array[0].value,
  nodes: []
}

if ('${settings.ls-addon:false}'== 'true') {
  resp.nodes.push({
    nodeType: "llsmp",
    engine: "${settings.php_engine:php8.3}",
    count: 1,
    cloudlets: "${settings.cloudlets:16}",
    diskLimit: "${settings.diskspace:[quota.disk.limitation]}",
    nodeGroup: "cp",
    skipNodeEmails: "true",
    displayName: "AppServer",
    env: {
      SERVER_WEBROOT: "/var/www/webroot/ROOT",
      REDIS_ENABLED: "true",
      WAF: "OFF",
      WP_PROTECT: "OFF"
    }
  })
} else {
  resp.nodes.push({
    nodeType: "lemp",
    engine: "${settings.php_engine:php8.3}",
    count: 1,
    cloudlets: "${settings.cloudlets:16}",
    diskLimit: "${settings.diskspace:[quota.disk.limitation]}",
    nodeGroup: "cp",
    skipNodeEmails: "true",
    displayName: "AppServer",
    env: {
      SERVER_WEBROOT: "/var/www/webroot/ROOT",
      REDIS_ENABLED: "true"
    }
  })
}

return resp;