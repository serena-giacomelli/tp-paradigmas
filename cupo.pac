| package |
package := Package name: 'cupo'.
package paxVersion: 1;
	basicComment: ''.


package classNames
	add: #Abogado;
	add: #Causa;
	add: #Estudio;
	add: #Persona;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package setPrerequisites: #(
	'..\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\Base\Dolphin'
	'..\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\Base\Dolphin Legacy Date & Time'
	'..\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\Base\Dolphin Message Box'
	'..\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Presenters\Prompters\Dolphin Prompter').

package!

"Class Definitions"!

Object subclass: #Causa
	instanceVariableNames: 'nro fechaIni fechaCierre fuero demandado demandante detalle sentencia montoObt'
	classVariableNames: 'Monto'
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #Estudio
	instanceVariableNames: 'abogados'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #Persona
	instanceVariableNames: 'tel email apellido nombre tipoDoc domicilio nroDoc'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Persona subclass: #Abogado
	instanceVariableNames: 'fuero id causas'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

"Global Aliases"!


"Loose Methods"!

"End of package definition"!

"Source Globals"!

"Classes"!

Causa guid: (GUID fromString: '{e0b4cdce-8cb4-4cef-b546-fa92ca67def0}')!
Causa comment: ''!
!Causa categoriesForClass!Unclassified! !
!Causa methodsFor!

cierreCausa
fechaCierre:= Date today.
sentencia:= MessageBox confirm: '¿El fallo fue favorable?'.
sentencia 
ifTrue: [montoObt := self Monto]
ifFalse: [montoObt := (self Monto * 0.8)].!

inicioCausa
| per |
nro := Prompter prompt: 'Ingrese el numero de causa'.
per := Persona new.
MessageBox notify: 'Ingrese los datos del demandante'.
per cargaDatos.
demandante := per.
per := Persona new.
MessageBox notify: 'Ingrese los datos del demandado'.
per cargaDatos.
demandado := per.
fechaIni := Date today.
fuero:= Prompter prompt: 'Ingrese el fuero de la causa'.
detalle := Prompter prompt: 'Ingrese el detalle de la demanda'.!

Monto
^50
! !
!Causa categoriesForMethods!
cierreCausa!public! !
inicioCausa!public! !
Monto!public! !
!

Estudio guid: (GUID fromString: '{b9589e07-f350-443a-8ac5-c3393b36a543}')!
Estudio comment: ''!
!Estudio categoriesForClass!Unclassified! !
!Estudio methodsFor!

abrirCausa!

asignarAbogado
abogados := OrderedCollection new.!

cerrarCausa!

liquiHaberes! !
!Estudio categoriesForMethods!
abrirCausa!public! !
asignarAbogado!public! !
cerrarCausa!public! !
liquiHaberes!public! !
!

Persona guid: (GUID fromString: '{23a74721-e42d-4920-9b8a-f958adc2f178}')!
Persona comment: ''!
!Persona categoriesForClass!Unclassified! !
!Persona methodsFor!

cargaDatos
tel := Prompter prompt: 'Ingrese su numero de telefono'.
email := Prompter prompt: 'Ingrese su email'.
nombre := Prompter prompt: 'Ingrese su nombre'.
apellido := Prompter prompt: 'Ingrese su apellido'.
tipoDoc := Prompter prompt: 'Ingrese su tipoDoc'.
nroDoc := Prompter prompt: 'Ingrese su nroDoc'.
domicilio := Prompter prompt: 'Ingrese su domicilio'.
! !
!Persona categoriesForMethods!
cargaDatos!public! !
!

Abogado guid: (GUID fromString: '{d5b1e23e-5c58-4acb-b3b9-ff6a0bece7cb}')!
Abogado comment: ''!
!Abogado categoriesForClass!Unclassified! !
!Abogado methodsFor!

calcMonto!

calcPorcentaje!

cargaDatos!

inicializaCausa
causas := OrderedCollection new.! !
!Abogado categoriesForMethods!
calcMonto!public! !
calcPorcentaje!public! !
cargaDatos!public! !
inicializaCausa!public! !
!

"Binary Globals"!

