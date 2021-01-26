---
title: 源码笔记目录
---

# 阅读顺序

以下是本文档的阅读源码的顺序，标题为包名，后面的序号代表的是**优先级**，1~4 优先级依次递减。

## java.lang

该包里其实就是 Java 的基本语法，包括了各种**基本数据类型**（`Integer`、`Long`、`Double`等）、各种**基本类**（`Object`、`Class`、`Enum`、`Thread`等）。

```md
Object  1
String  1
AbstractStringBuilder   1
StringBuffer    1
StringBuilder   1
Boolean 2
Byte    2
Double  2
Float   2
Integer 2
Long    2
Short   2
Thread  2
ThreadLocal 2
Enum    3
Throwable   3
Error   3
Exception   3
Class   4
ClassLoader 4
Compiler    4
System  4
Package 4
Void    4
```

## java.util

该包里放的都是一些 Java 的基本工具，包括各种**容器**和**集合**，如`List`、`Map`、`Set`等。

```md
AbstractList    1
AbstractMap 1
AbstractSet 1
ArrayList   1
LinkedList  1
HashMap 1
HashTable   1
HashSet 1
LinkedHashMap   1
LinkedHashSet   1
TreeMap 1
TreeSet 1
Vector  1
Queue   1
Stack   1
SortedMap   2
SortedSet   2
Collections 2
Arrays  2
Comparator  2
Iterator    2
Base64  3
Date    3
EventListener   4
Random  4
SubList 4
Timer   4
UUID    4
WeakHashMap 4
```

## java.util.concurrent

这是一个非常著名的，简称`JUC`的包，里面包含了 **Java 并发**和**多线程**编程相关的代码。

```md
ConcurrentHashMap   1
Executor    2
AbstractExecutorService 2
ExecutorService 2
ThreadPoolExecutor  2
BlockingQueue   2
AbstractQueuedSynchronizer  2
CountDownLatch  2
FutureTask  2
Semaphoer   2
CyclicBarrier   2
CopyOnWriteArrayList    3
SynchronousQueue    3
BlockingDeque   3
Callable    3
```

## java.util.concurrent.atomic

```md
AtomicBoolean   2
AtomicInteger   2
AtomicLong  2
AtomicReference 3
```

## java.util.function

这里面包括了 Java **函数式编程**的常见接口和代码。

## java.util.stream

## java.lang.reflect

该包包含了 Java **反射**基本元素相关的代码。

```md
Field   2
Method  2
```

## java.lang.annotation

该包包含了 Java **注解**基本元素相关的代码。

```md
Annotation  3
Target  3
Inherited   3
Retention   3
Documented  4
ElementType 4
Native  4
Repeatable  4
```

## java.util.concurrent.locks

```md
Lock    1
Condition   2
ReentrantLock   2
ReentrantReadWriteLock  2
```

## java.io

该包包含了 Java 传统的输入输出的代码，主要是面向**字节**和**流**的 IO 操作。

```md
File    2
InputStream 2
OutputStream    2
Reader  3
Writer  3
```

## java.nio

该包包含了 Java 非阻塞的 IO 相关的代码，主要是面向**缓冲**、**通道**以及**选择**的 IO 操作。

```md
Buffer  3
ByteBuffer  4
CharBuffer  4
DoubleBuffer    4
FloatBuffer 4
IntBuffer   4
LongBuffer  4
ShortBuffer 4
```

## java.sql

```md
Connection  3
Driver  3
DriverManager   3
JDBCType    3
ResultSet   3
Statement   3
```

## java.time

该包包含了 Java **新日期**等相关的代码，比如典型的有`DateTimeFormatter`等类。

## java.math

该包主要包含了一些**高精度运算**的数据支持类。

## java.net

该包主要包含了 Java **网络通信**，比如`Socket`通信等相关的源代码。

```md
Socket  2
ServerSocket    3
URI 3
URL 3
URLEncoder  4
```