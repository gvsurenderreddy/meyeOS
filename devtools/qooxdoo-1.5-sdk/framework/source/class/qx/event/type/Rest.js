/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Tristan Koch (tristankoch)

************************************************************************ */

/**
 * EXPERIMENTAL - NOT READY FOR PRODUCTION
 *
 * Rest event object.
 */
qx.Class.define("qx.event.type.Rest",
{
  extend: qx.event.type.Data,

  properties:
  {
    /**
     * The request of the event.
     */
    request: {
      check: "qx.io.request.AbstractRequest"
    },

    /**
     * The action that invoked the request.
     */
    action: {
      check: "String"
    },

    /**
     * The phase of the request.
     */
    phase: {
      check: "String"
    }
  },

  members:
  {
    /**
     * Initializes an event object.
     *
     * @param data {var} Then event's new data
     * @param old {var?null} The event's old data
     * @param cancelable {Boolean?false} Whether or not an event can have its default
     *  action prevented. The default action can either be the browser's
     *  default action of a native event (e.g. open the context menu on a
     *  right click) or the default action of a qooxdoo class (e.g. close
     *  the window widget). The default action can be prevented by calling
     *  {@link qx.event.type.Event#preventDefault}
     * @param request {qx.io.request.AbstractRequest} The associated request.
     * @param action {String} The associated action.
     * @param phase {String} The associated phase.
     * @return {qx.event.type.Data} The initialized instance.
     */
    init: function(data, old, cancelable, request, action, phase) {
      this.base(arguments, data, old, cancelable);

      this.setRequest(request);
      this.setAction(action);
      this.setPhase(phase);
    },

    /**
     * Get a copy of this object
     *
     * @param embryo {qx.event.type.Data?null} Optional event class, which will
     *  be configured using the data of this event instance. The event must be
     *  an instance of this event class. If the data is <code>null</code>,
     *  a new pooled instance is created.
     * @return {qx.event.type.Data} A copy of this object.
     */
    clone: function(embryo) {
      var clone = this.base(arguments, embryo);
      clone.setAction(this.getAction());
      clone.setPhase(this.getPhase());
      clone.setRequest(this.getRequest());
      return clone;
    }
  }
});
