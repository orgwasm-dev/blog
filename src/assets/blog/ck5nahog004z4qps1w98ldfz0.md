## Mathematics' Anarchitecture & Processes

In the [previous post](https://risav.dev/mathematics-architecture-and-processes-ck5ic92qa03jzqks1l2gv7lob) in this series, we made an outline of mathematical areas of programmer interests that we will explore together in 2020. 

A major portion of the post was about how first-order and/or propositional logic is isomorphic with categories and types. Since [propositions are types](https://youtu.be/IOiZatlZtGU), you can have such constructs as constraint types or process types and perhaps a protocol for interacting with other types. A simple way forward would be to simply use the commonly held notion of mathematical operators and the fact that these operators will always be 'operating' on n - tuples, with elements of various types. It is more fun to work on the operators themselves rather than with numbers.

Operators that preserve the structure or map to a specific one are more interesting than the stochastic ones for now. At this point, we are in the realm of what we call [transformers](https://en.wikipedia.org/wiki/Natural_transformation) and [mutators](https://en.wikipedia.org/wiki/Functor_category). You will see that these are actually generalized nicknames for natural transformations and functors. We will be using these to build our basic data structures like multi-dimensional matrices, preferably in [rasdaman](http://www.rasdaman.org/)  on [PostgreSQL](https://www.postgresql.org/). These matrices encode graphs and hypergraphs which we will be using in our collaborative system ([CoSys](https://github.com/risavkarna/cosys/blob/master/README.md)).

We have introduced the co-planetary platform and [nep.work in a separate post](https://risav.dev/introducing-nepwork-ck5294zz401bvmus1p2oskup0). We end the series on a more abstract note by talking about our internal and external language and about the sinks, links & sources.

The whole point is to make a map. And then to make a smaller map to navigate the previous map, ad infinitum. This structure is 12 tiered, 6 tiered, 4 tiered, 3 tiered, 2 tiered and 1 tiered in a 1D plane. In 2D, it is 12x7/8/9/1/2/3/4 and nxn. In 3D, it is 3x3x3 and 3n+-1 x 3n+-2 x 3n dimensional. All kinds of data can be mapped on to this single monolithic immutable structure. The projection of such data, however, requires specialized DBMS and algorithms. For example, we will be using [Druid](https://druid.apache.org/) for time series and stream data. For document storage, we will be using [MongoDB or Mongo-like DB APIs](https://www.mongodb.com/collateral/mongodb-architecture-guide). For key:value stores, we will lean towards [memcached](https://memcached.org/) or [redis](https://redis.io/). This is not to be confused with the  [Apache Ignite](https://ignite.apache.org/) API, which be a strictly read-only layer of our persistence model for mathematics, and anything else for that matter. 

Yes, we are still strictly only talking about mathematics and applied mathematics. We will shift focus towards 'pure' mathematics and forget the engineering concerns later when we define types and categories. We still have the responsibility to build the matrices and hypergraphs promised before. For our purpose of finding mathematical foundations and mathematical structures and founding a mathematical software based on those findings, we will need [steps 7 through 12](https://drive.google.com/file/d/0B16MjWvnV5UtUHpjbHpoNVVjMGM/view). 

In the next post in this series, we will cover the origin of all of these ideas and the [one ring](https://lotr.fandom.com/wiki/One_Ring) to rule them all. 

>Three Rings for the Elven-kings under the sky,

> Seven for the Dwarf-lords in their halls of stone,

> Nine for Mortal Men doomed to die,

> One for the Dark Lord on his dark throne

> In the Land of Mordor where the Shadows lie.

> One Ring to rule them all, One Ring to find them,

> One Ring to bring them all and in the darkness bind them

> In the Land of Mordor where the Shadows lie

> Are the rings, dear dev, that form our API

![E35F1ED4-6957-43BA-B216-B7E8A71ED5F6.jpeg](https://cdn.hashnode.com/res/hashnode/image/upload/v1579580392909/1zJXuCnDC.jpeg)
