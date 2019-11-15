# Decorators

- Function that can be used to modify/change/anything defferent properties/methods in the class
- Not the same as Javascript decorators
- Used inside/on classes only
- Understanding the order in which decorators are ran are the key to understanding them
- Experimental!

## Details on Decorators
Decorators on a property, method, accessor
- First argument is the **prototype** of the object
- Secound argument is the key of the property/method/accessor on the object
- Third argument is the property descriptor (more on this in a second)
- Decorators are applied when the code for this class is ran (**not when an instance is created**)

## Property Descriptor 
| Property     | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| writable     | Whether or not this property can be changed                  |
| enumerable   | Whether or not this property get looped over by a 'for...in' |
| value        | Current value                                                |
| configurable | Propery definition can be changed and property can be delete |