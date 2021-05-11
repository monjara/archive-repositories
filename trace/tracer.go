package trace

import (
	"io"
)

// Tracer includes Trace method
type Tracer interface {
	Trace(...interface{})
}

// New returns &Tracer
func New(w io.Writer) Tracer {
	return nil
}
