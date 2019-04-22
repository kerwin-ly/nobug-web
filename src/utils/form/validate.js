/**
 * @desc 验证表单的集中处理
 * @export
 * @class Validate
 */
export default new class Validate {
  /**
   * @param {any} rule 验证规则
   * @param {any} value 验证value
   * @param {any} callback 回调方法
   */
  validatePassword(rule, value, callback) {
    const minLength = 6;
    const maxLength = 12;

    if (value.length < minLength || value.length > maxLength) {
      callback(new Error('请输入6-12位密码'));
    } else {
      callback();
    }
  }
}();
