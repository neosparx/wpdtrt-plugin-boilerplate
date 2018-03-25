<?php
/**
 * PSR-4 Autoloader
 * @see http://phpenthusiast.com/blog/how-to-autoload-with-composer
 *
 * @package   	WPPlugin
 * @version     1.2.15
 */

  /**
   * Autoload PHP classes
   *  autoload.php is generated by Composer and autoloads classes for all vendors
   *  $projectRootPath allow for child plugins, where this PHP file is nested within vendor/
   * @see https://stackoverflow.com/a/37952183/6850747
   * @todo This code is duplicated in index.php
   */

  if ( defined( 'WPDTRT_PLUGIN_CHILD' ) ) {
    $projectRootPath = realpath(__DIR__ . '/../../..') . '/';
  }
  else {
    $projectRootPath = '';
  }

  require_once $projectRootPath . "vendor/autoload.php";
?>
