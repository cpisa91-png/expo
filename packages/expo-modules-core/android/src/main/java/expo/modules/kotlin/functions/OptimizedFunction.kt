package expo.modules.kotlin.functions

/**
 * Marks a method for optimized code generation.
 *
 * Functions annotated with @OptimizedFunction use JNI reflection with a shared C++ dispatcher,
 * bypassing the runtime boxing/unboxing overhead of the standard DSL approach.
 *
 * Usage:
 * ```kotlin
 * class MyModule : Module() {
 *   @OptimizedFunction
 *   fun addNumbers(a: Double, b: Double): Double = a + b
 *
 *   override fun definition() = ModuleDefinition {
 *     Name("MyModule")
 *     Function("addNumbers", addNumbers())
 *   }
 * }
 * ```
 */
@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.BINARY)
annotation class OptimizedFunction

/**
 * A lightweight descriptor carrying the optimized function metadata.
 * The JS-facing name is supplied separately via the `Function("name", descriptor)` overload.
 */
data class OptimizedFunctionDescriptor(
  val kotlinMethodName: String,
  val jniSignature: String,
  val paramTypes: Array<String>,
  val returnType: String
) {
  override fun equals(other: Any?): Boolean {
    if (this === other) return true
    if (javaClass != other?.javaClass) return false
    other as OptimizedFunctionDescriptor
    return kotlinMethodName == other.kotlinMethodName &&
      jniSignature == other.jniSignature &&
      paramTypes.contentEquals(other.paramTypes) &&
      returnType == other.returnType
  }

  override fun hashCode(): Int {
    var result = kotlinMethodName.hashCode()
    result = 31 * result + jniSignature.hashCode()
    result = 31 * result + paramTypes.contentHashCode()
    result = 31 * result + returnType.hashCode()
    return result
  }
}
