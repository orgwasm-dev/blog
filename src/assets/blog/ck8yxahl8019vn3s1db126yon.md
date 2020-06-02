## MAP III - Types of Types II

> **We need to invert the wasteful trend of learning something as timeless as higher maths only as a means to learn an ephemeral or ever-changing programming language or paradigm. Let's aim instead to explain and discuss foundational mathematical structures like types and categories through these programming languages as visual learning aids. This helps us become better developers in any language, including new ones for quantum computing or even natural language-based programming.**  

Previously on [MAP - Types of Types](https://risav.dev/map-iii-types-of-types-ck8lrxnlx011b79s17rbswwtq), we looked at the type hierarchy of Scala and worked with a basic 'level 1' definition of types. Now we will level up and refine our previous working definition of types as value spaces with a set of allowed operations. At level 2, we will celebrate Function's tying of the knot with Data and how that adds a new dimension, literally as well, to how we have come to define and understand types. We will need to go back to discussing some basics like the very concept of functions and objects. With this slightly boring and unapologetically pedantic detour, we will demystify some commonly held oversimplifications or misconceptions and proceeds towards the more advanced and interesting concepts being on the same page. For instance we will see how functions and objects together create a fast track towards advanced abstract data types and algebraic structures or how classes and objects are simultaneously quite different and so much more than what we have been teaching our kids.

__________________________________________________________

## 2. Function weds Data: Domain and Co-domain Spaces

Our last definition of types was mainly concerned with types of data. It was therefore sufficient to think of value spaces, basic syntactics and behavior, understood in the sense of a set of operations on elements of that space. In programming, behavior comes from patterns of actions, which itself comes from operational chunks of code, which in turn act only on either data or other codes.

It's no surprise that chunks of programming instructions and of data have lived together on the same memory space ever since [von Neumann architecture](https://en.wikipedia.org/wiki/Von_Neumann_architecture) was first adopted. This intimacy of data and code is lost on many programmers who do not often need to think of the nitty-gritty of the innards of their machines. 

Functions and objects are two major constructs in programming where this intimacy-by-design is directly reflected at the level of program codes. Since they have already 'moved in' together, many languages including Scala makes this an official relationship, which I have cheekily phrased as 'function weds data'.


### 2.1 Object and Class

Just like every construct in Scala has a type, every instance of a type is an object. Scala does not have Java-style primitive types, which do not have objects.

Whether or not a language follows ***object oriented programming***, an object in a programming language is a data abstraction representing value(s) in memory. An object has a named identifier and may have properties, methods with read/write access to the object's properties and relationships with other objects. Alike functions, objects have mathematical counterparts too. We will explore them in the next two posts in this series.

### Templates

A class is famously known as a 'blueprint' or template for instantiating an object. The class defines what properties, methods and relations an object can have and/or from where it inherits them. A class name is also usually the name of the user-defined type of the objects made using the class's constructor, which also usually has the same name as the class. 

This is only partially true in Scala but wholly correct in Scala's more popular cousin Java. In Scala, it is problematic to hold on to the idea of class as a sole blueprint for objects. 

The Scala specs define objects, classes and traits (Java 8+ interface-like abstractions supporting states, mix-in type restrictions, reference to objects of implementing classes) in terms of templates, which are not actually available for programmers. 

> **Templates, not classes, are the actual templates in Scala.**

A template definition may be a class template definition or an object template definition or a trait template definition. A class definition or an object definition may be for a regular class of objects or a singleton object or for a case class or a case singleton object. These template definitions are what actually define the type signature of the resulting objects and the constructors or initial values therein define the initial states of those objects. 

This conception of class in Scala is, as with functions, closer to a class in mathematics in the sense that a class definition represents a constrained set of instantiable objects while an object definition is just for one object. 

Scala also throws away the concept of static classes that do not need instantiation in favor of singleton objects created via the object template definition. These static classes, values and methods are hard to reconcile with the object oriented paradigm. They do not support inheritance and dynamic dispatch due to polymorphism, which itself is possible due to inheritance. Lastly they are also tough to mock and unit test easily.

### Meta

A class may also instantiate other classes in some languages or object systems like Python, CLOS, Object Pascal, Smalltalk, Ruby, Objective C and C++. Such a class is called a metaclass. An object may also have a meta level or more above it. Such an object is called a metaobject. 

As is usual with meta of anything, the metaclasses and metaobjects are parts of advanced concepts in programming. These are useful in understanding reflection, a programming construct's ability to introspect, augment or change its own behavior. In Scala this is achieved via Java's Reflection API and via natively added capabilities since Scala's 2.10 version. We will go on this reflective journey when we start the library developer tracks (L1 - L3) after having discussed the essential maths and concept behind the programmer's track (A1 - A3).


### Bonus: Classless OOP

However a class is not the only mechanism for defining templates for object instantiation. 

Here's an [excerpt from MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes) regarding how JavaScript has OOP, better than most other languages known for their OOP, without classes. The ES6 classes are actually just syntactic sugar to make it easier for those used to class based OOP.


> **A prototype-based language?**
> 
> **JavaScript is often described as a prototype-based language — to provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from. An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on.** 
> 
> **This is often referred to as a prototype chain, and explains why different objects have properties and methods defined on other objects available to them.**
> **Well, to be exact, the properties and methods are defined on the prototype property on the Objects' constructor functions, not the object instances themselves.**


### 2.2 Functions and Methods

A function is a chunk of code you can call by name. The function, its inputs and output can each be objects. In Scala, they always are.

### Inputs:

Functions may take values as inputs, possibly operate on these values or create side-effects based on those values or the context, and likely return something in the end. Pure functions however are more well behaved and closer to the functions from mathematics thanks to idempotence, referential transparency, and separation from side effects.

Informally speaking, the space of all possible values that could be accepted as an input is called the *domain* of a function.

> **Spaces are just sets with added structures. In our context, spaces may have varying dimensionality and each element has its own previously defined level 1 type.**

### Outputs: 

> **Every chunk of code in Scala that can be put on a single line returns a value.**

These lines, which may be typed as blocks for readability, may be either functions or expressions that compose functions. In either case, an output per expression or per function is guaranteed. Even if an expression or function is handling side effects or running into an exception, the previously mentioned `Unit` return is guaranteed.

This style of programming with expressions is called ***expression oriented programming (EOP)*** and is a part of the **functional programming** paradigm.

Informally speaking, the space of all possible values that could be produced as an output is called the *co-domain* of a function.

__________________________________________________________


### 2.3 Parameter Types and Return Types

Now that we are literally on the same page regarding the lingo and the concepts, let's take these concepts to meet some program codes.

Since every line is either a function or an expression, we can simply take note of what type of thing goes in and what comes out. 

### if/else-if/else (v1)

This is commonly needed and commonly avoidable expression. Let's break it down.

How could we write a (basic) version of the if-then expression? We know that it would 
- take a predicate as the first parameter i.e. either a `Boolean` or something that returns a `Boolean` 
- take a function to execute if the above value is true as the second parameter
- the predicate and the function could use any number of parameters of `Any` type

```TypeScript
// Naive if-then without advannced tytpes

def ifThen(someBool: Boolean)(func: () => Boolean): Any = {
  !someBool || func()
}

def unitaryFunc() = {
  false
}

ifThen(true) (unitaryFunc)
// res0: Any = false
// same as the invocation below

ifThen(1 == 2) {unitaryFunc}
// res1: Any = true

ifThen(42 == 42) {unitaryFunc}
// res2: Any = false
```

This is quite a useless if-then in its current form but it gives us a good outline of how if-then works and what we should improve over the course of this series. 

- As explained in 'Curly Braces and Parentheses' in [Viva La Scala](https://risav.dev/viva-la-scala-ck8nu72vb029w79s179c38sza) explainer collection, the curly braces you see in if statements and other control structures are nothing more than just simple parentheses substituted for readability and multi-line blocks. 
- The if-then structure or `p -> q` is logically equivalent to `¬p ∨ q `

In terms of improvements, these would be highly necessary:

- We will need to support more types of parameters and return values for the function being passed to the if-then function.
- We will need to find a way to compose if-then to else-if and else constructs.

Function composition requires that the return type of the function passed as a parameter is the same as the parameter type of the function receiving that function as its parameter. How then do you compose functions that need to support incompatible return and parameter types? We will later explore some solutions to this, including monadic ones. 

Here's an an example of how Java's Optional is converted to the monadic version in Scala:

```TypeScript
def toScala[A](o: Optional[A]): Option[A] = if (o.isPresent) Some(o.get) else None
```

### match-case

The above example is fairly simple use case for if-else because the Optional container has a nice and simple `isPresent` method make it easier to test against a method with `Boolean` return type. However here's how the reverse condition is achieved by Scala:

```TypeScript
import java.util.{Optional, OptionalDouble, OptionalInt, OptionalLong}
import java.{lang => jl}

object OptionConverters {

  def toJavaOptionalInt(o: Option[jl.Integer]): OptionalInt = o match {
    case Some(a) => OptionalInt.of(a)
    case _ => OptionalInt.empty
  }
}
```

This time we are checking against the possible types. match-case is a better fit for checking against types, which in this case are either `Some` or anything else. 

Note that the match construct is also an expression and the curly braces are once again super-powered parentheses which can take multiline values or functions or expressions as arguments.

The input to the match expression is `o` provided as the first operand in infix style and the `case` expressions provided together as the later parameter in the curly braces. The return type is determined by the return type of the expression on the right side of the matched case.

The match-case expression is also capable of checking against values and is especially better suited for cases with too many `case`s. 

```TypeScript
def getEnglishNames(x: Int): String = x match {
  case 0 => "Zero"
  case 1 => "One"
  case 2 => "Two"
  case 3 => "Three"
  case 4 => "Four"
  case 5 => "Five"
  case 6 => "Six"
  case 7 => "Seven"
  case 8 => "Eight"
  case 9 => "Nine"
  case _ => "Not enough fingers!!"
}

getEnglishNames(6)
// res0: String = Six

getEnglishNames(10)
// res1: String = Not enough fingers!!
```

How about mixing these two expressions? If you have a use case where you have to check for values while also checking for types, it's best to use both. Here's how Scala converts `FiniteDuration` to a Java duration:

```TypeScript
  def toJava(duration: FiniteDuration): JDuration = {
    if (duration.length == 0) JDuration.ZERO
    else duration.unit match {
      case TimeUnit.NANOSECONDS => JDuration.ofNanos(duration.length)
      case TimeUnit.MICROSECONDS => JDuration.of(duration.length, ChronoUnit.MICROS)
      case TimeUnit.MILLISECONDS => JDuration.ofMillis(duration.length)
      case TimeUnit.SECONDS => JDuration.ofSeconds(duration.length)
      case TimeUnit.MINUTES => JDuration.ofMinutes(duration.length)
      case TimeUnit.HOURS => JDuration.ofHours(duration.length)
      case TimeUnit.DAYS => JDuration.ofDays(duration.length)
    }
  }
```

These are pre-existing types. Can we do this with custom types? As we discussed, custom types could come from custom objects or classes. You might have also noticed earlier that class and object template definitions may also have a `case` qualifier in front of it.

```JavaScript
sealed abstract class Device
case class IPhoneX(uglyNotchSize: Long) extends Device
case class S10(holeCamOffset: Double) extends Device
case class NexS(popUpCam: Boolean) extends Device
case class Pixel(pixels: Int) extends Device {
  def sorry = "Old School"
}

def howBeautiful(device: Device): String = device match {
  case IPhoneX(_) => "Ugly"
  case S10(offset) if offset == 0.5 => "Symmetric but Meh"
  case S10(_) => "Meh"
  case NexS(false) => "Cool"
  case NexS(true) => "Clunky"
  case px: Pixel => px.sorry
}


howBeautiful(IPhoneX(10))
// res0: String = Ugly
howBeautiful(S10(0.5))
// res1: String = Symmetric but Meh
howBeautiful(S10(0.7))
// res2: String = Meh
howBeautiful(NexS(false))
// res3: String = Cool
howBeautiful(NexS(true))
// res4: String = Clunky
howBeautiful(Pixel(4))
// res5: String = Old School
```

The `sealed` keyword tells Scala that all possible subtypes or `case`s are present within the same file and not dispersed elsewhere in the code. 

The `if` statement on the first S10 `case` is another way you could mix `if` with `match`. In this `case`, it is called a pattern guard. 

Notice that the ordering of the `case`s matters because the fall through is similar to that found in `switch` statements in other languages.

Also note that all but the last `case` are still checking against values albeit of value objects. Only the last `case` is actually checking against a user defined type.

We now have a good groundwork to look into try-catch and try-success-failure. We will also be looking into for, for-yield and foreach expressions once we have collection types in our arsenal by the end of the next post. That is also where Scala/Mathematics concepts start to get real fun to play with. 

# Next on 'Types of Types'

To keep the posts from going beyond optimal lengths, we will explore each of the next 'levels' of understanding and defining types in their own posts. Here's a sneak peek. 

## 3. Abstract Data Types: Types with Structure and Behavior

Here we will rediscover the good old data structures mostly used in programming through a more formal, functional and scala-ble lens 🧐. Sum and product types will also pave the way for the more involved algebraic data types in the later section.

### 3.1 Sum and Product Types

  - 3.1.1 Union *or* Tagged Union
  - 3.1.2 Tuple *and* Record

### 3.2 Set and List

  - 3.2.1 Unordered and Non-duplicated
  - 3.2.2 Ordered and Random Accessible

### 3.3 Maps
### 3.4 Stack and Queue
### 3.5 Graph and Tree

__________________________________________________________

## 4. Algebraic Data Types and HKTs

Here we will (re-)discover universal algebra, ring-like, group-like, lattice-like, module-like, and algebra-like algebraic structures relevant to advanced functional and reactive programming. We will also demystify higher kinded types and similarly exotic higher order concepts. 

__________________________________________________________

## 5. A Gentle Introduction to Category Theory

Here we will use the Scala concepts and Type Theory topics thus far to go for a deep dive into Bartoz Milewski's excellent [course on Category Theory ](https://bartoszmilewski.com/2014/10/28/category-theory-for-programmers-the-preface/).

______________________________________________________________

**Further resources:**

- 2.1 Classes and Objects Specs in Scala: https://scala-lang.org/files/archive/spec/2.13/05-classes-and-objects.html
 
- 2.2 Scala source code: https://github.com/scala/scala/blob/2.13.x/src/library/scala/

______________________________________________________________

- 1.1 D. L. Parnas, John E. Shore, David Weiss: Abstract types defined as classes of variables, https://dl.acm.org/doi/10.1145/942574.807133

- 1.2 Tony Hoare on his infamous billion dollar mistake: https://www.youtube.com/watch?v=kz7DfbOuvOM

- 1.3 Official Scala API Docs and resources: https://www.scala-lang.org/

- 1.4 L.G. Meredith, Pro Scala: Monadic Design Patterns for the Web: http://patryshev.com/books/GregoryMeredith.pdf