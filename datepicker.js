/* =========================================================
 * jquery-date-picker.js
 * Repo: https://adc.github.trendmicro.com/hie-ui/bootstrap-datepicker
 * Demo: https://eternicode.github.io/bootstrap-datepicker/
 * Docs: https://bootstrap-datepicker.readthedocs.org/
 * =========================================================
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

;(function (factory) {
  if (typeof define === 'function' && define.amd) {
      define(['jquery'], factory);
  } else if (typeof exports === 'object') {
      factory(require('jquery'));
  } else {
      factory(jQuery);
  }
}(function ($, undefined) {

  'use strict';

  var static_datepicker   = $.fn.datepicker;
  var datepickerWrapper   = '<div class="datepicker-wrapper input-icon-group"></div>';
  var datepickerLabel     = '<label class="input-icon-label"><i class="fa fa-calendar"></i></label>';
  var datepickerContainer = '<div class="dropdown-menu" data-role="datepicker"></div>';

  // DATEPICKER CLASS DEFINITION
  // ===========================

  var Datepicker = function (element, options) {
    this.options              = options;
    this.$body                = $(document.body);
    this.$datepickerWrapper   = $(datepickerWrapper);
    this.$element             = $(element).addClass('form-control input-width-xs').attr({ 'data-role': 'datepicker-input', placeholder: this.options.format });
    this.$label               = $(datepickerLabel).attr('for', this.$element.attr('id'));
    this.$datepickerContainer = $(datepickerContainer);

    this.$datepickerWrapper.insertBefore(this.$element).append(this.$element, this.$label, this.$datepickerContainer);

    this.init();
  };

  Datepicker.VERSION = '1.0.0';

  Datepicker.DEFAULTS = {
    format: 'yyyy-mm-dd',
    todayHighlight: true,
	  autoclose: true,
	  keyboardNavigation: false
  };


  Datepicker.prototype =  {
    init: function () {
      static_datepicker.call(this.$datepickerContainer, this.options);
    }
  };

  // DATEPICKER PLUGIN DEFINITION
  // ============================
  var Plugin = function (option) {
    return this.each(function () {
      var $this   = $(this);
      var data    = $this.data('bs.datepicker');
      var options = $.extend({}, Datepicker.DEFAULTS, $this.data(), typeof option == 'object' && option);

      if (!data) $this.data('bs.datepicker', (data = new Datepicker(this, options)));
      if (typeof option == 'string') data[option].call($this);
    });
  };

  $.fn.datepicker             = Plugin;
  $.fn.datepicker.Constructor = Datepicker;


  // DATEPICKER NO CONFLICT
  // ======================

  $.fn.datepicker.noConflict = function () {
    $.fn.datepicker = static_datepicker;
    return this;
  }

  // DATEPICKER DATA-API
  // ===================
  $(document)
    .on('changeDate changeMonth', '[data-role="datepicker"]', function (e) {
      $(this).parent().find('input').val($(this).data('datepicker').getFormattedDate());
    })
    .on('focus', '[data-role="datepicker-input"]', function (e) {
      $(this).addClass('input-focus');
      $(this).parent().find('[data-role="datepicker"]').show();
    })

}));




