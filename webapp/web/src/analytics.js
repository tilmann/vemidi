import 'autotrack';

ga('create', process.env.GOOGLE_ANALYTICS_TRACKING_ID, 'auto');
ga('require', 'urlChangeTracker');
ga('require', 'cleanUrlTracker');
ga('require', 'outboundLinkTracker');
ga('send', 'pageview');