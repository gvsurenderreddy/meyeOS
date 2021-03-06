/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Tino Butz (tbtz)

************************************************************************ */

qx.Class.define("qx.test.mobile.form.Button",
{
  extend : qx.test.mobile.MobileTestCase,

  members :
  {
    testValue : function()
    {
      var button = new qx.ui.mobile.form.Button("affe");
      this.getRoot().add(button);

      this.assertString(button.getValue());
      this.assertEquals(button.getValue(), "affe");
      this.assertEquals(button.getValue(), button.getContentElement().innerHTML);

      this.assertEventFired(button, "changeValue", function() {
        button.setValue("");
      });

      this.assertEquals(button.getValue(), "");
      this.assertEquals(button.getValue(), button.getContentElement().innerHTML);

      button.destroy();
    }
  }

});
