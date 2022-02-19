<?php

/**
#ddev-generated: Automatically generated WordPress settings file.
 ddev manages this file and may delete or overwrite the file unless this comment is removed.
 */

if (getenv('IS_DDEV_PROJECT') == 'true') {
  /** The name of the database for WordPress */
  define('DB_NAME', 'db');
  
  /** MySQL database username */
  define('DB_USER', 'db');
  
  /** MySQL database password */
  define('DB_PASSWORD', 'db');
  
  /** MySQL hostname */
  define('DB_HOST', 'ddev-wp-backend-db');

  /** WP_HOME URL */
  define('WP_HOME', 'https://wp-backend.ddev.site');
  
  /** WP_SITEURL location */
  define('WP_SITEURL', WP_HOME . '/');
}

/** Enable debug */
define('WP_DEBUG', true);


/** Define the database table prefix */
$table_prefix  = 'wp_';
