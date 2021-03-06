/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2007-2009 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Fabian Jakobs (fjakobs)

************************************************************************ */

qx.Class.define("qx.test.util.Template",
{
  extend : qx.dev.unit.TestCase,

  members :
  {
    testRun : function()
    {
      var template = new qx.util.Template();
      template.setContent("Hello {name}");
      this.assertEquals("Hello Jonny", template.run({ name : "Jonny" }));
      template.dispose();
    }
  }
});
